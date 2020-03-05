import React from 'react';
import { Text } from 'react-native-paper';
import DotBackground from 'components/DotBackground';
import { Grid, Col } from 'components/Grid';
import { useTranslation } from 'react-i18next';

const Settings = (): any => {
  const { t } = useTranslation();

  return (
    <DotBackground>
      <Grid width={[1]}>
        <Col px='20px'>
          <Text>{t('SETTINGS')}</Text>
        </Col>
      </Grid>
    </DotBackground>
  );
};


export default Settings;
