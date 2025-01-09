import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from '../components/Room';

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(
          "http://localhost:5005/api/rooms/getallrooms"
        );
        console.log("Fetched data:", data);

        setRooms(data.rooms);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Homescreen;
