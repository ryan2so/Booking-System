import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get('http://localhost:5005/api/rooms/getallrooms');
        console.log('Fetched data:', data);
        setRooms(data.rooms);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Home Screen</h1>
        <h1>There are {rooms.length} rooms</h1>
    </div>
  );
};
export default Homescreen;