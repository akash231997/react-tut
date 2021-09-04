import React, {useEffect, useState, useMemo, useRef} from "react";

function Hooks(prop) {

    const [count, setCount] = useState(0);

    // The Effect Hook, useEffect, adds the ability to perform some life-cycle methods from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount unified into single API.
    // Use as many as wants
    // It accept function, called every time when state and props updated unless condition mentioned
    // We can call outside function from useEffect but cannot call function defined in useEffect from outside
    // Can use use
    useEffect(() => {
        console.log("Called like ComponentDidMount using hooks");
        // Not possible to declare state inside effect
        // const [check, setcheck] = useState(0);

        // without conditional update of state, goes into infinte loop
        if(count < 5)
            setCount(count + 1);

        name();
        function makeFunctionHere() {
            console.log("called from hook")
        }
        makeFunctionHere();
        
    });
    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

    useEffect(() => {
        console.log("Called like ComponentDidUpdate using hooks");
    }, [count, prop.dataa[0]]);

    function name() {
        console.log("called from useState");

        // makeFunctionHere() didn't work
    };

    const [length, setLength] = useState(0);

    // https://stackoverflow.com/questions/56347639/react-useeffect-vs-usememo-vs-usestate
    // useMemo(hook for pure component) only recalculates a value if the elements in its dependency array change (if there are no dependencies - i.e. the array is empty, it will recalculate only once). If the array is left out, it will recalculate on every render. Calling the function does not cause a re-render. Also it runs during the render of the component and not before.
    // function name start with capital letter to make it React function component
    // If your component renders the same result given the same props or state(shallow comparison), you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.
    function Fibonaci(data) {
        console.log(data);
        // comment this and see console
        const numbers = useMemo(() => {
            console.log("Calculating Fibonacci")
            const result = [1, 1];
            for(let i=2; i<data; i++)
                result [i] = result[i-1] + result[i-2];
            
            return result;
        }, [data]);

        // const result = [1, 1];
        //     for(let i=2; i<data; i++)
        //         result [i] = result[i-1] + result[i-2];
            
        return <p>{data} numbers of the fibonacci sequence: {numbers.join(', ')}</p>
    }

    let textInput = useRef(null);
    
    return(
        <div>
            <h1>Hooks {count} Mul: {prop.dataa[0].data}</h1>
            <input type="text" onChange={e => setLength(Number(e.target.value))} ref={textInput}></input>

            {Fibonaci(length)}

            <button onClick={() => { setCount(count+1); textInput.current.style.color = "red"; }}>Update State</button>
        </div>
    )
}

export default Hooks;

// With hooks, we can use class components features like state, life cycle methods, pure component in functional components

// Two Rules for hooks:
// Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
// Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.


// use keyword is reserved for hooks, use_* 