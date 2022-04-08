import React from "react";
import "./Banana.css"

const Banana = () => {
    return (
        <div className="banana-container">
            <p>
                ('b' + 'a' + + 'a' + 'a').toLowerCase() is === "banana" due to (+ + a) being 
            </p>
            <p>
                passed as a number which will return
                NaN resulting in baNaNa setting this to lower case will return banana
            </p>
        </div>
    );
}

export default Banana;