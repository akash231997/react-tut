import {forwardRef} from "react";

const GrandChild = forwardRef(function(prop, reff) {
    return(
        <span>
            <h2 ref={reff}>Inside Grand Children</h2>
            <button onClick={prop.parent}>Call Grand Parent function</button>
        </span>
    )
});

export default GrandChild;

// Ref forwarding is a technique for automatically passing a ref through parent component to one of its children.