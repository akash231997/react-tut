import {Link} from 'react-router-dom'

// Link is used define links for routing
function NavLink(params) {

    const users = [
        {id: 1, name: 'Tom'},
        {id: 2, name: 'Jerry'},
        {id: 3, name: 'Doggo'},
        {id: 4, name: 'Bruno'}
    ]

    return(
        <div>
            <Link to="/">Hooks</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/Ref">Ref</Link> &nbsp;&nbsp; &nbsp;
            <Link to="/HOC">HOC</Link> &nbsp;&nbsp; &nbsp;
            <Link to="/Comp">No Comp Route</Link> &nbsp; &nbsp;
            {/* By using anchor tag, page reloads to change content and breaks SPA rule. Thats why we use react library function Link*/}
            <a href="/Comp">Wrong Way to Route in SPA(Reload)</a><br></br>

            {
                users.map((ele, index) => 
                   <Link key={index} to={ "/user/" + ele.id}> <span>{ele.name}</span> &nbsp; &nbsp; </Link>
                )
            }

        </div>
    )
}

export default NavLink;