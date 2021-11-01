import  { useEffect, useState } from 'react';

const UseDestination = () => {
    const [destinationList,setDestinationList]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/places")
        .then(res=>res.json())
        .then(data=>setDestinationList(data))
    },[])

    return [destinationList]
};

export default UseDestination;