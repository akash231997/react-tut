import React, {useState, useRef} from "react";
import GrandChild from "./GrandChild";
import Student from "./Student";
import Address from "./Address";

export default function User(props) {

    let [isGoing, setIsGoing] = useState(false);
    let [numOfGuests, setNumOfGuests] = useState(0);

    const address = [
        {HN: '12', City: 'Agra', State: 'UP'},
        {HN: '43', City: 'Noida', State: 'UP'},
        {HN: '54', City: 'Aligarh', State: 'UP'},
        {HN: '65', City: 'Meerut', State: 'UP'}
    ]
    
    function sayHello(d) {
        alert("Lifting State Up : " + d);
    }

    let textRef = useRef(null);

    function handleChange(e) {
        let target = e.target;
        target.type === 'checkbox' ? setIsGoing(target.checked) : setNumOfGuests(target.value);
        
    }

    function handleSubmit(e) {
        alert("Number of guests: " + numOfGuests + isGoing);
        e.preventDefault();
    }

    return(
        <div>
        <h2>User {props.name}{props.version.suffix} - {props.version.stable}</h2>
 
        {/* or onClick={() => props.parent()} */}
        <button onClick={props.grandParent}>Call parent function</button>

        <button onClick={() => textRef.current.style.color = "blue"}>Forward Ref</button>
        {/* Nested Component */}
        <GrandChild parent={props.grandParent} ref={textRef}/>

        {/* Reusable Component */}
        {
            address.map((item, i) =>
                <Address key={i} data={item} fun={sayHello}></Address>
            )
        }

        <hr></hr>

    {/* Controlled component are those in which input field values are controlled by React state */}
        <form onSubmit={handleSubmit}>
            <input type="checkbox" name="isGoing" checked={isGoing} onChange={(e) => handleChange(e)} />
            <input type="Number" name="numOfGuests" value={numOfGuests} onChange={(e) => handleChange(e)} />
            <input type="submit" value="Submit" />
        </form>

    {/* UnControlled component are those in which input field values are not controlled by React state but controlled by DOM directly either via JQuery, JS or using Ref*/}
    {/* Uncontrolled and controlled component can be used in both class and functional component */}
    {/* In uncontrolled component there is a atrribute called defaultValue and defaultChecked, to specify default values to form fields on intial loading only */}
    {/* https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */}
    {/* https://stackoverflow.com/questions/30727837/react-change-input-defaultvalue-by-passing-props */}
        </div>
    )
};

export function People(props) {

    const [print, setPrint] = useState(false);
    const [inp, setInp] = useState(null);
    const [show, setShow] = useState(true);

    let state = 2;
    function getValue(event) {
        // console.log(event.target.value);
        setPrint(true);
        setInp(event.target.value);

        if(event.target.value == null)
            setPrint(false);
     }
    
    const unreadMessages = props.unreadMessages;

    //A “key” is a special string attribute you need to include when creating lists of elements.
   // Keys help React identify which items have changed, are added, or are removed. 
   // Elements inside the map() call need keys, not the nested component element if the nested component present
   // Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique.
   // Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name: 
   
   const sidebar = 
                    <ul>
                        {
                        props.posts.map((post) =>
                            <li key={post.id}>          {post.title}</li>
                        )
                        }
                    </ul>;
    let n = props.posts.length;
    let rows = [];
    for(let i=0;i<n;i++) {
        rows.push(
        <li key={i}>
           {props.posts.title}
        </li>
        );
    }

    const students = [
        {email: "abc@gmail.com", contact: 222},
        {email: "pop@gmail.com", contact: 888},
        {email: "lol@gmail.com", contact: 222},
    ]
    // Inside return for, while loop didn't work gives error but map, filter etc is supported
    return(
        <div>

            {
                print? <h3>{inp}</h3> : null,

                state===1? <h3>Inside 1</h3> :state===2? <h3>Inside 2</h3>: <h3>Inside 3</h3>
            }

{/*Inline If ->> It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. */}
            {
                unreadMessages.length >  0 &&
                <h3>You have {unreadMessages.length} messages</h3>
            }

            {sidebar}
            {
                <ol>
                    {rows}
                </ol>
            }
            <input type="text" onChange={getValue}></input>

            {
                show &&  <Student />
            }
            <button onClick={() => {setShow(!show)}}>Toggle Component</button>

            <table border="1">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((element, index) => 
                        element.contact === 222 ?
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{element.email}</td>
                                <td>{element.contact}</td>
                            </tr>
                            : null
                    )
                }
                </tbody>
            </table>

        </div>
    )
};

// can't access useState function here
// function getValue(event) {
//    // console.log(event.target.value);
//    setPrint(true);
//    setInp(event.target.value);
// }