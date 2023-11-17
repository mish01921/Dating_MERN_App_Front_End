import { useState } from "react";
import "./DatingCards.css";
import DatingCard from "react-tinder-card";

const DatingCards = () => {
  const [people, setPeople] = useState([
 
    {
      name: "Random Girl",
      imgUrl:
        "https://th.bing.com/th/id/OIP.0XppHHG5qIDHsvQQS4I7iQHaNK?rs=1&pid=ImgDetMain",
    },
    {
      name: "Another Girl",
      imgUrl: "https://cdn.acidcow.com/pics/20140506/random_cute_girls_44.jpg",
    },
    {
        name: "Random Guy",
        imgUrl:
          "https://th.bing.com/th/id/OIP.LWgYHlsfEMh6OH7N7tcDxwHaKX?rs=1&pid=ImgDetMain",
      },
      { name: "Another Guy", imgUrl: "https://i.redd.it/tkm6dn0t7ti21.jpg" },
  ]);

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
