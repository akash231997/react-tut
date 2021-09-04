import {useEffect, useState} from 'react'

function GetAPI() {

    const [res, setResponse] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/550/similar?api_key=11c3a03a90beaa2f24685ccfb5bcd42b";
    const URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetch(URL).then((result) => {

            // result are in string format
            console.log(result);
            if(result.status !== 200) {
                alert("error: " + result.status);
                return;
            }

            result.json().then((response) => {
                //console.log(response);
                setResponse(response);
            })

        }).catch((error) => {
            alert("Error while fetching: " + error);
        })
    },[]);

    return(
        <div>
            <h2>User's Data</h2>
            <table border="1">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                    {
                        res.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


            
        </div>
    )
}

export default GetAPI;