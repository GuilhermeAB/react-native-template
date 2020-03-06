import React from 'react';
import DotBackground from 'components/DotBackground';
import { Grid } from 'components/Grid';
import Empty from 'src/assets/taken.svg';
import { Title } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const Settings = (): any => {
  const { t } = useTranslation();

  return (
    <DotBackground>
      <Title>{t('SETTINGS')}</Title>
      <Grid width={[1]} alignItems='center' justifyContent='center'>
        <Empty width='50%' />
      </Grid>
    </DotBackground>
  );
};

export default Settings;
