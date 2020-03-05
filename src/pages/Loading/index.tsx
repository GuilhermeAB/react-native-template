import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleLoadingAction } from 'store/loading';
import { LoadingProps } from 'navigation/loading.navigator';
import { AppState } from 'store/';
import { ActivityIndicator } from 'react-native-paper';
import DotBackground from 'components/DotBackground';
import { Container } from './styles';

const Loading = ({ loading, toggleLoading }: LoadingProps): any => {
  useEffect(() => {
    if (toggleLoading) {
      setTimeout(() => toggleLoading(), 1000);
    }
  }, [loading, toggleLoading]);

  return (
    <DotBackground>
      <Container>
        <ActivityIndicator size='large' />
      </Container>
    </DotBackground>
  );
};

const mapStateToProp = (state: AppState, props: LoadingProps): any => ({
  loading: state.loading,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  toggleLoading: (): void => {
    dispatch(toggleLoadingAction());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Loading);
