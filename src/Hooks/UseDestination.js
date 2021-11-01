import  { useEffect, useState } from 'react';

const UseDestination = () => {
    const [destinationList,setDestinationList]=useState([])
    useEffect(()=>{
        fetch("https://floating-spire-72741.herokuapp.com/places")
        .then(res=>res.json())
        .then(data=>setDestinationList(data))
    },[])

    return [destinationList]
};

export default UseDestination;