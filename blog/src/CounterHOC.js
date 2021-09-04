import {useState} from 'react'


// A higher-order component is a function that takes a component and returns a new component.
function HOC(props) {
    
    return(
        <props.cmp></props.cmp>
    )
}

// Base component that we want to resuse
export function CounterHOC(params) {
    
    const [count, setCount] = useState(0);
    return(
        <>
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </>
    )
}

export default HOC;