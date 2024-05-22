import React from "react";
import Slider from "./Slider";

const images = [
  {
    url: "https://picsum.photos/2400/800",
    title: "First Slide",
    description: "Some description for the first slide",
  },
  {
    url: "https://picsum.photos/2400/800",
    title: "Second Slide",
    description: "Some description for the second slide",
  },
  {
    url: "https://picsum.photos/2400/800",
    title: "Third Slide",
    description: "Some description for the third slide",
  },
];

const ImageGallery = (props) => {
  return (
    <div className={`bg-${props.mode}`}>
      <Slider images={images} />
    </div>
  );
};

export default ImageGallery;
