import React, { useState, useEffect } from 'react';

export default function Usefetch(API) {
    const [data, setdata] = useState([]);
  
    useEffect(() => {
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            setdata(res); 
          });
      }, []);
    
return [data]
}
