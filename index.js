import React from "react";

// This should be reported even if other rule crash
var shouldTriggerNoVar = 1;

// https://github.com/yannickcr/eslint-plugin-react/issues/2871
export default function MyComponent() {
  return <a href />;
}

// https://github.com/yannickcr/eslint-plugin-react/issues/2869
export function MyComponentz() {
  const A = <>{<div />}</>;
  return <div>{A}</div>;
}


// https://github.com/yannickcr/eslint-plugin-react/issues/2870
const A = { B: 'C' };
export  class MyComponentsss extends React.Component {
  [A.B] () {
    return null
  }
}

// https://github.com/yannickcr/eslint-plugin-react/issues/2875
const B =
<div>
    B
</div>;

// https://github.com/yannickcr/eslint-plugin-react/issues/2879
const C = <div hasOwnProperty="should not be allowed tag" />;

// https://github.com/yannickcr/eslint-plugin-react/issues/3016
let { default: defaultReactExport, ...allReactExports } = React;
