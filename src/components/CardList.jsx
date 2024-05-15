import React from "react";
import Cards from "./Cards";
import inthestars from "../images/inthestars.png";
import lethergo from "../images/lethergo.png";
import hurtssogood from "../images/hurtssogood.png";
import dandelions from "../images/dandelions.png";
import untilifoundyou from "../images/untilifoundyou.png";
import athousandyears from "../images/athousandyears.png";
import idfc from "../images/idfc.png";
import feelit from "../images/feelit.png";
import iwannabeyours from "../images/iwannabeyours.png";
import thoseeyes from "../images/thoseeyes.png";
import nosurprises from "../images/nosurprises.png";
import starboy from "../images/starboy.png";
import nightchanges from "../images/nightchanges.png";
import thenightwemet from "../images/thenightwemet.png";
import anotherlove from "../images/anotherlove.png";
import fairytale from "../images/fairytale.png";
import herewithme from "../images/herewithme.png";
import romantichomicide from "../images/romantichomicide.png";

const CardList = (props) => {
  const cards = [
    {
      title: "In the stars",
      description: "Benson Boone",
      image: inthestars,
      status: "Last played 2mins ago",
    },
    {
      title: "Let her go",
      description: "Passenger",
      image: lethergo,
      status: "Last played 4mins ago",
    },
    {
      title: "Hurts so good",
      description: "Astrid S",
      image: hurtssogood,
      status: "Last played 2mins ago",
    },
    {
      title: "Dandelions",
      description: "Ruth B.",
      image: dandelions,
      status: "Last played 2mins ago",
    },
    {
      title: "Until i found you",
      description: "Stephen Sanchez",
      image: untilifoundyou,
      status: "Last played 3mins ago",
    },
    {
      title: "A thousand years",
      description: "James Arthur",
      image: athousandyears,
      status: "Last played 4mins ago",
    },
    {
      title: "IDFC",
      description: "Black Bear",
      image: idfc,
      status: "Last played 4mins ago",
    },
    {
      title: "Feel it",
      description: "d4vd",
      image: feelit,
      status: "Last played 4mins ago",
    },
    {
      title: "I wanna be yours",
      description: "Arctic Monkeys",
      image: iwannabeyours,
      status: "Last played 4mins ago",
    },
    {
      title: "Those eyes",
      description: "New West",
      image: thoseeyes,
      status: "Last played 4mins ago",
    },
    {
      title: "No surprises",
      description: "Radiohead",
      image: nosurprises,
      status: "Last played 4mins ago",
    },
    {
      title: "Starboy",
      description: "The Weeknd",
      image: starboy,
      status: "Last played 4mins ago",
    },
    {
      title: "Night Changes",
      description: "One Direction",
      image: nightchanges,
      status: "Last played 4mins ago",
    },
    {
      title: "The Night We Met",
      description: "Lord Huron",
      image: thenightwemet,
      status: "Last played 4mins ago",
    },

    {
      title: "Another Love",
      description: "Tom Odell",
      image: anotherlove,
      status: "Last played 4mins ago",
    },
    {
      title: "Fairytale",
      description: "Alexander Rybak",
      image: fairytale,
      status: "Last played 4mins ago",
    },
    {
      title: "Here With Me",
      description: "d4vd",
      image: herewithme,
      status: "Last played 4mins ago",
    },
    {
      title: "Romantic Homicide",
      description: "d4vd",
      image: romantichomicide,
      status: "Last played 4mins ago",
    },
  ];

  return (
    <div className={`bg-${props.mode}`}>
      <div className="card-list d-flex flex-row justify-content-evenly flex-wrap pb-3">
        {cards.map((card, index) => (
          <Cards
            key={index} // React expects a unique 'key' prop for each child
            images={card.image}
            title={card.title}
            description={card.description}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
