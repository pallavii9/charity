import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/assets/img/banner1.png",
    thumbnail: "/assets/img/banner1.png",
  },
  {
    original: "/assets/img/banner2.jpg",
    thumbnail: "/assets/img/banner2.jpg",
  },
  {
    original: "/assets/img/banner1.png",
    thumbnail: "/assets/img/banner1.png",
  },
];

const Caroussal = () => {
  return (
    <ImageGallery
      items={images}
      autoPlay
      lazyLoad
      thumbnail={false}
      showNav={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets
    />
  );
};
export default Caroussal;
