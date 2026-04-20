import type * as React from 'react';

interface TestProps {
  isActive: boolean;
}

export function Test(props: TestProps): React.JSX.Element {
  const { isActive } = props;
  return <>{isActive}</>;
}

export function TestProva(): React.JSX.Element {
  return <Test isActive={true} />;
}
