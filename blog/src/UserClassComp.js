import React from 'react';

export default class UserClassComp extends React.Component {
    
    //never call API from constructor because data we have to send doesn't get ready, so call from componentDidMount
    //props available in constructor as long as they are passed to super()
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            name: this.props.name,
            count:1
        }

        // here this.props == props but not in render()
        console.log(this.props)
    }

    updateValue() {
        console.log("updateValue");
        this.setState((lastState) => ({
            color: 'blue', 
            count: lastState.count + 1
        }))
    }

    // componentDidMount() is invoked immediately after a component is mounted (inserted into the DOM tree means html, css is ready). Any operation that requires DOM nodes(or depends on html) should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    // there is no effect of props and state update in componentDidMount() becuase it is method of mounting phase not updating phase and called only once when component mounted intially
    componentDidMount() {
        console.log("componentDidMount");
       // this.setState({color: 'green' });
    }

    // Called when any update to state or props, not called in mounting phase or intial redering
    // update state with condition only otherwise goes into infinite loop
    // componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
    // Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed) means with condition only.
    // If your component implements the getSnapshotBeforeUpdate() lifecycle (which is rare), the value it returns will be passed as a third “snapshot” parameter to componentDidUpdate(). Otherwise this parameter will be undefined.
    componentDidUpdate(prevProps, prevState, snapshot){

        if(prevState.count < 10) {
            console.log("componentDidUpdate", prevState);
            this.setState({count: this.state.count + 1});
        }
        
        // example of API call
        // if (this.props.userID !== prevProps.userID) {
        //     this.fetchData(this.props.userID);
        //   }
    }

    // By default return false
    // This is called before render function when state or props are updated
    // This method mainly used as a performance optimization
    // Note that returning false does not prevent child components from re-rendering when their state changes.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextState, this.state.count);

        if(this.state.count < 15)
            return true;

        return false;
    }

    // By default, when your component’s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate()
    // Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().
    forceUpdate() {

    }

    render() {
        console.log("render")
        // Do not update state even with condition here it goes into infinite loop, use componentDidUpdate instead
        return(
            <div>
                {/* Use {{}} to give style in JSX, first{} for JSX, second{} for style object*/}
                <h1 style={{color: "yellow", backgroundColor: "black"}}>Naya {this.state.name} {this.props.name}</h1>
                <h3 onClick={() => this.updateValue()}>{this.state.color} {this.state.count} (check console)</h3>
                <h3>{this.props.sendHtml}</h3>

            </div>

           
        )
    }

}

// we can't use useState in class-component because, useState is a Hook and Hooks are not implement in class-component.

// PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you.
// When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won’t compare current props and state to next out of the box. 
// Shallow Comparison -> It means that when comparing primitive data-types it compares their values, but when comparing objects it compares only references. It helps to improve the performance of the app.
// https://stackoverflow.com/questions/41340697/react-component-vs-react-purecomponent

