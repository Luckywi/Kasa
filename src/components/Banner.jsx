function Banner({ image, text, brightness = 60 }) {
  return (
    <div className="banner">
      <img
        src={image}
        alt="Banner"
        style={{ filter: `brightness(${brightness}%)` }}
      />
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Banner;