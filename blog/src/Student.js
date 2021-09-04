import React from 'react'

class Student extends React.Component {

    constructor() {
        super();
        this.state = {
            visible: true
        }
    }

    // componentWillUnmount () will be called first then if there any connection or api call will be terminated and then at last component will be removed from the DOM
    // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests
    componentWillUnmount() {
        console.log(this.state.visible);
        alert("Student Component unmounted")
    }
    render() {
        return(
            <h2>Student Class Component</h2>
        )
    }
}

export default Student;