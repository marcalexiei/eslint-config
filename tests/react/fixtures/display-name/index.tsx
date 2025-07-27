import * as React from 'react';

export const DisplayNameComponent = React.forwardRef<HTMLDivElement>(
  (_, ref) => <div ref={ref}>DisplayNameComponent</div>,
);
