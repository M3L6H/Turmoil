import React from 'react';

export default ({ dashboard }) => {
  let Component;

  switch (dashboard.selected) {
    default:
      Component = <div>Test</div>
  }
  
  return <Component />;
};
