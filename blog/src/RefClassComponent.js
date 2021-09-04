import React, {createRef}  from 'react';

class RefClassComponent extends React.Component {

    constructor() {
        super();
        this.textInput = createRef();
        this.text = createRef();
    }

    // When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.
    // React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts.
    focusTextInput() {
        const node  =  this.textInput.current;
        node.style.backgroundColor = "grey";
        node.style.color = "red";

        //console.log(this.text.current);
        this.text.current.style.color = "green";
    }

    render() {
        return (
            <>
                <hr></hr>
                <input type="text" ref={this.textInput}/>
                <input type="text" ref={this.text}/>
                <button onClick={() => this.focusTextInput()}>Use Ref</button>
            </>
        )
    }
}

export default RefClassComponent;

// Refs provide a way to access DOM nodes or React elements created in the render method and manipulate it.
// Use ref only when using sate and props didn't work and need to manipulate DOM directly