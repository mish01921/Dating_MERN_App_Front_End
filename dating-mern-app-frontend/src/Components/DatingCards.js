import React, { useState,useEffect } from "react";
import "./DatingCards.css";
import DatingCard from "react-tinder-card";
import axios from "axios"

 
const DatingCards = () => {
  const [people, setPeople] = useState([])
 
  const fetchData = async() => {
    try {
      const response =await axios.get("http://localhost:8001/dating/cards")
      setPeople(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };
  return (
    <div className="datingCards">
      <div className="datingCards_container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
};
export default DatingCards;
