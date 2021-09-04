
function Address(prop, reff) {

    let country = "India";

    return (
        <>
            <span>{prop.data.HN}</span>
            <span>{prop.data.City}</span>
            <span>{prop.data.State}</span>
            <button onClick={() => prop.fun(country)}>Click</button>
        </>
    )
}


// Bad way to declare function in reusable components because it gets repeated in all places where component get reused and consumes unecessary memory. Instead of this make a function in parent component and pass it as props
// jitne baar component reuse hoga utne hi function banjayenge
function sayHello(e) {
    alert("Hello");
}

export default Address;

// Fragments
// It is a pattern in React to wrap multiple elements or multiple components
// Fragments let you group, a list of children without adding extra nodes to the DOM
// Can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.
// Fragments declared with the explicit <React.Fragment> syntax may have keys.
// Key is the only attribute that can be passed to Fragment. In the future, we may add more.