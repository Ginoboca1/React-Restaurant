import React from "react";
import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { BsInstagram, BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300
    } else{
      current.scrollLeft += 300
    }
  }

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <SubHeading title="Instagram" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>

      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="gallery-image-card" key={index} id = {`image-${index}`}>
              <img src={image}/>
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>

        <div className="gallery-images-arrows">
            <BsArrowLeftShort className="gallery-images-arrows-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery-images-arrows-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
