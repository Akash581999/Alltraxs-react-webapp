// import React from "react";

// // Assuming "../images" is the correct path to your images folder
// const images = require.context("../images", true);
// // Collect all image paths
// const imageList = images.keys().map((imagePath) => images(imagePath).default);

// function ImageGallery() {
//   return (
//     <div>
//       {imageList.map((image, index) => (
//         <img key={`image-${index}`} src={image} alt={`${index}`} />
//       ))}
//     </div>
//   );
// }

// export default ImageGallery;
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

const App = (props) => {
  return (
    <div className={`bg-${props.mode}`}>
    <Slider images={images} />
    </div>
  );
};

export default App;
