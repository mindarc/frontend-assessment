import React from 'react';

export default function Banana() {
  return (
    <div>
      <p>Steps:</p>
      <ol>
        <li>{`('b' + 'a' + ( + 'a' ) + 'a').toLowerCase()`}</li>
        <li>{`('ba' + ( + 'a' ) + 'a').toLowerCase()`}</li>
        <li>{`('ba' + NaN + 'a').toLowerCase()`}</li>
        <li>{`('baNaN' + 'a').toLowerCase()`}</li>
        <li>{`('baNaNa').toLowerCase()`}</li>
        <li>{`'banana'`}</li>
      </ol>
    </div>
  );
}
