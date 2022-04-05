import React from "react";
import "./Banana.css"
const Banana = () => {
    return (
        <div className="banana-container">
            <p>
                ('b' + 'a' + + 'a' + 'a').toLowerCase() is == to banana due to (+ + a) being 
            </p>
            <p>
                passed as a number will return
                NaN setting this to lower case will return banana
            </p>
        </div>
    );
}

export default Banana;