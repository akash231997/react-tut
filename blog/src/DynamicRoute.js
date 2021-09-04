import {withRouter} from 'react-router-dom'

function DynamicRoute(prop) {

    return(
        
        <div>Dynamic Route User:{prop.match.params.id}</div>
    )
}

export default withRouter(DynamicRoute);