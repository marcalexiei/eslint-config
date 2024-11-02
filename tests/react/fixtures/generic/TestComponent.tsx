import React, { useState } from 'react';

import type { MyModel } from './models';

interface TestComponentProps {
  boh?: MyModel;

  itemList: Array<MyModel>;
}

export function TestComponent(props: TestComponentProps): React.JSX.Element {
  const { boh } = props;

  const [myState] = useState();

  return (
    <>
      TestComponent {boh} {myState}
    </>
  );
}
