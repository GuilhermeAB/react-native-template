import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signOutAction } from 'store/auth';
import DotBackground from 'components/DotBackground';
import { Grid, Col } from 'components/Grid';
import Button from 'components/Button';

const Home = ({
  signOut,
}: any): any => {
  // function toLogin (): void {
  //   navigation.navigate(AppRoute.SETTINGS);
  // }


  return (
    <DotBackground>
      <Grid width={[1]}>
        <Col px='20px'>
          <Button mt='1' mode='contained' onPress={(): void => signOut()}>Sign Out</Button>
        </Col>
      </Grid>
    </DotBackground>
  );
};

// const mapStateToProps = (state: AppState, props: HomeProps): any => ({
//   theme: state.theme,
//   props: props,
// });

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  // changeTheme: (name: Themes): void => {
  //   dispatch(changeThemeAction(name));
  // },
  signOut: (): void => {
    dispatch(signOutAction());
  },
});

export default connect(undefined, mapDispatchToProps)(Home);
