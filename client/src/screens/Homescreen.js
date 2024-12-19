import React, { useEffect, useState} from 'react';
import axios from 'axios';

const Homesceen = () => {
 
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await axios.get('/api/rooms/getallrooms')).data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
    <h1> Home Screen </h1>
      <h1>they are {data.length} rooms</h1>

    </div>
  )
}
export default Homesceen;