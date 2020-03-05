import React from 'react';
import { Text } from 'react-native-paper';
import DotBackground from 'components/DotBackground';
import { Grid, Col } from 'components/Grid';

const Settings = (): any => {
  return (
    <DotBackground>
      <Grid width={[1]}>
        <Col px='20px'>
          <Text>Settings</Text>
        </Col>
      </Grid>
    </DotBackground>
  );
};


export default Settings;
