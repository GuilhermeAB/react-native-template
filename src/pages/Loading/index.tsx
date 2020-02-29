import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleLoadingAction } from 'store/loading';
import { LoadingProps } from 'navigation/loading.navigator';
import { AppState } from 'store/';
import { ActivityIndicator } from 'react-native-paper';
import { Container } from './styles';

const Loading = ({ loading, toggleLoading }: LoadingProps) => {
  useEffect(() => {
    if (toggleLoading) {
      setTimeout(() => toggleLoading(), 1000);
    }
  }, [loading, toggleLoading]);

  return (
    <Container>
      <ActivityIndicator size='large' />
    </Container>
  );
};

const mapStateToProp = (state: AppState, props: LoadingProps) => ({
  loading: state.loading,
  props: props,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleLoading: () => {
    dispatch(toggleLoadingAction());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(Loading);
