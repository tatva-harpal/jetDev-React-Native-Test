import * as React from 'react';
import {CommonActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function resetToScreen(name, params = null) {
  if (isReadyRef.current && navigationRef.current) {
    const resetActionState = {
      index: 0,
      routes: [{name, params}],
    };
    navigationRef.current.dispatch(CommonActions.reset(resetActionState));
  } else {
    setTimeout(() => {
      resetToScreen(name, params);
    }, 1500);
  }
}
export function resetNavigationToState(state) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.reset(state));
  } else {
    setTimeout(() => {
      resetNavigationToState(state);
    }, 1500);
  }
}
