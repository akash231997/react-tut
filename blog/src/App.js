import logo from './logo.svg';
import './App.css';
import User, {People} from './User'
import UserClassComp from './UserClassComp';
import {useState} from 'react';
import Hooks from './Hooks';
import RefClassComponent from './RefClassComponent';
import HOC, {CounterHOC} from './CounterHOC';
import NavLink from './NavLinks';
import DynamicRoute from './DynamicRoute';
import GetAPI from './GetAPI';
import StateWithObject from './StateWithObject';

import {Route, Switch} from 'react-router-dom';

function App() {

  // Nested functional compo
  function blog() {
    return(
      <h4>Inside App-Blog</h4>
    )
  }

  // functional compo state
  const [count, setCount] = useState(0);
  const [naam, setName] = useState("React");
  const [mul, multiply] = useState([{data: 1}]);
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  function click() {
    multiply( [{data: mul[0].data * 10}] );
  };

  function updateCounter() {

    for(let i=0;i<5;i++) {
      setCount((prevState) => {
        //console.warn(prevState);
        return prevState + 1;
      })
    }
   
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick= {updateCounter}>{count}</button>
        <button onClick= {click}>{mul[0].data}</button>
        <User name={naam} version={{suffix: ".js", stable: "17.0.3"}} grandParent={getParent}></User>
        <People unreadMessages={messages} posts={posts}/>
        {blog()}
                {/* <blog />   Not working*/}
        <UserClassComp sendHtml={<span>This <strong>HTML</strong> is working.</span>} name={naam}/>
        <button onClick={() => setName("RReact")}>CLick</button>
      </header>

      <h2>Routing</h2>
      
        <NavLink />
        
        {/* Renders the first child <Route> or <Redirect> that matches the location or path. */}
        <Switch>

          {/* Route are used to define different components that rendered when we click on different link */}
          {/* without exact=true it will get rendered with all other links because it matches with all other paths*/}
          <Route path="/" exact={true}> <Hooks dataa={mul}> </Hooks></Route>
          <Route path="/Ref"> <RefClassComponent></RefClassComponent> </Route>
          <Route path="/HOC">  
            <span>
            <HOC cmp={CounterHOC}></HOC>
            <HOC cmp={CounterHOC}></HOC>
            <HOC cmp={CounterHOC}></HOC>
            </span> 
          </Route>
          <Route path="/Comp"> 
            <div style={{backgroundColor:"magenta"}}>
              <strong>Plain HTML without component</strong>
            </div>
          </Route>
          <Route path="/user/:id"> <DynamicRoute /> </Route>
          {/* Without switch it get rendered with all other links becuase Route is inclusive in nature while Switch is exclusive */}
          <Route path="*"><PageNotFound /></Route>

        </Switch>

        <GetAPI />
        <StateWithObject />
    </div>
  );
}

function getParent() {
  alert("Hello from parent");
}


function PageNotFound() {
    return(
      <div>
        <h2 style={{backgroundColor: "red"}}>404: Page Not Found</h2>
      </div>
    )
}

export default App;

// State is similar to props, but it is private and fully controlled by the component.
// All React components must act like pure functions with respect to their props. means it shouldn't change props value