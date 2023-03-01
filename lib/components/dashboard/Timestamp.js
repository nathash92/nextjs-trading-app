import React, { useEffect, useState } from 'react'

const Timestamp = () => {
  const [timeVal, setTimeVal] = useState();

  useEffect(() => {

    const t = setInterval(() => {
      setTimeVal(new Date());
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return <>{timeVal?.toLocaleString()}</>
}

export default Timestamp