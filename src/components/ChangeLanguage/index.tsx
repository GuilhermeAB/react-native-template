import React, { useState } from 'react';
import { Portal, Dialog, List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import Button from 'components/Button';
import i18n from 'i18n';
import { showMessage } from 'react-native-flash-message';
import { Grid, Col } from 'components/Grid';
import { LangKeys, ChangeLanguageAction } from 'store/i18n';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

const ChangeLanguage = (BtnProps?: any & { ChangeCurrentLanguage: Function, }): any => {
  const { t } = useTranslation();

  const [isVisible, setVisibilty] = useState<boolean>(false);

  function saveLanguage (lng: string): void {
    i18n.changeLanguage(lng).then(
      () => {
        BtnProps.ChangeCurrentLanguage(lng);
        setVisibilty(false);
      },
      () => {
        showMessage({
          message: t('ERR_CANNOT_CHANGE_LANGUAGE'),
          icon: 'danger',
          type: 'danger',
          duration: 1500,
        });
        setVisibilty(false);
      },
    );
  }

  return (
    <Grid mt='3'>
      <Col alignItems='flex-end'>
        <Button compact mode='contained' icon='translate' onPress={(): void => setVisibilty(true)} {...BtnProps}>
          {BtnProps?.children}
        </Button>
      </Col>

      <Portal>
        <Dialog visible={isVisible} onDismiss={(): void => setVisibilty(false)}>
          <Dialog.Title>{t('SELECT_LANGUAGE')}</Dialog.Title>

          <Dialog.Content>
            <List.Section>
              <List.Item
                title={t('I18N_ENGLISH')}
                onPress={(): void => saveLanguage(LangKeys.EN)}
              />
              <List.Item
                title={t('I18N_PORTUGUESE_BR')}
                onPress={(): void => saveLanguage(LangKeys.PTBR)}
              />
            </List.Section>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  ChangeCurrentLanguage: (lang: LangKeys): void => {
    dispatch(ChangeLanguageAction(lang));
  },
});

export default connect(undefined, mapDispatchToProps)(ChangeLanguage);
