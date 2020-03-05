import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SignOutAction } from 'store/auth';
import DotBackground from 'components/DotBackground';
import { Grid, Col } from 'components/Grid';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';

const Home = ({
  signOut,
}: any): any => {
  const { t } = useTranslation();


  return (
    <DotBackground>
      <Grid width={[1]}>
        <Col px='20px'>
          <Button mt='1' mode='contained' onPress={(): void => signOut()}>
            {t('SIGN_OUT')}
          </Button>
        </Col>
      </Grid>
    </DotBackground>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  signOut: (): void => {
    dispatch(SignOutAction());
  },
});

export default connect(undefined, mapDispatchToProps)(Home);
