import * as React from 'react';
import { Fragment } from 'react';

export function TestReactFragment(): React.JSX.Element {
  return <React.Fragment>react-fragment</React.Fragment>;
}

export function TestFragment(): React.JSX.Element {
  return <Fragment>fragment</Fragment>;
}
