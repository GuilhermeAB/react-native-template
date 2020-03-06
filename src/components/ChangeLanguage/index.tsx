import React, { useState } from 'react';
import { Portal, Dialog, List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import Button from 'components/Button';
import i18n from 'i18n';
import { showMessage } from 'react-native-flash-message';
import { Grid, Col } from 'components/Grid';

const ChangeLanguage = (BtnProps?: any): any => {
  const { t } = useTranslation();

  const [isVisible, setVisibilty] = useState();

  function saveLanguage (lng: string): void {
    i18n.changeLanguage(lng).then(
      () => {
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
        <Button compact mode='contained' icon='translate' onPress={(): void => setVisibilty(true)} {...BtnProps} />
      </Col>

      <Portal>
        <Dialog visible={isVisible} onDismiss={(): void => setVisibilty(false)}>
          <Dialog.Title>{t('SELECT_LANGUAGE')}</Dialog.Title>

          <Dialog.Content>
            <List.Section>
              <List.Item
                title={t('I18N_ENGLISH')}
                onPress={(): void => saveLanguage('en')}
              />
              <List.Item
                title={t('I18N_PORTUGUESE_BR')}
                onPress={(): void => saveLanguage('ptBR')}
              />
            </List.Section>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Grid>
  );
};


export default ChangeLanguage;
