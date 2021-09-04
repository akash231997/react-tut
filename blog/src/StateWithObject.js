import {useState} from 'react';

function StateWithObject() {

    const [data, setData] = useState({city:"agra", country:"India"})
    const [dataArray, setDataArray] = useState(["LA", "USA"])

    function updateDataArray(event, index) {
        setDataArray(
            dataArray.map((ele, idx) => {
                if(idx == index) 
                    return ele = event.target.value;
                else
                    return ele;
            })
        );
    }

    return (
        <>
            <h3>{data.city}, {data.country}</h3>
            <input name="City" value={data.city} onChange={(e) => {setData({country: data.country ,city: e.target.value})}} />&nbsp;&nbsp;
            <input name="Country" value={data.country} onChange={(e) => {setData({...data , country: e.target.value})}} />
            <hr />

            <h3>{dataArray[0]}, {dataArray[1]}</h3>
            {
                dataArray.map((item, index) =>
                  <input key={index} value={item} onChange={(e) => updateDataArray(e, index)} />
                )
            }
            {/* <input name="City" value={dataArray[0]} onChange={(e) => setDataArray(dataArray[0]=e.target.value)} />&nbsp;&nbsp;
            <input name="Country" value={dataArray[1]} onChange={(e) => {setData({...data , country: e.target.value})}} /> */}
            <hr />
        </>
    )
};

export default StateWithObject;

// If we set the particular object field directly then other fields will become null, so we have to set other fields as well.
// But in case of very large objects the solution to set every other field is not feasible so use ...objectName