import React from "react";

// Assuming "../images" is the correct path to your images folder
const images = require.context("../images", true);
// Collect all image paths
const imageList = images.keys().map((imagePath) => images(imagePath).default);

function ImageGallery() {
  return (
    <div>
      {imageList.map((image, index) => (
        <img key={`image-${index}`} src={image} alt={`${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;
