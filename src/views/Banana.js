import React from 'react';
import Btn from '../components/Btn';

const Banana = () => {
  const paragraph = {
    margin:'1rem', 

  };
  return (
    <div style={paragraph}>
      <p>
        Because ("+ 'a'").toLowerCase() will return NaN.<br/>
        So ('b' + 'a' + ( + 'a' ) + 'a') will turn into ('baNaNa') <br/>
        so eventually to 'banana'.
      </p>
      <Btn />
    </div>
  );
}
export default Banana;