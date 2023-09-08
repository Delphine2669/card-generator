import PropTypes from "prop-types";

function Card({ src, alt }) {
  return (
    <div className="card-div">
      <img src={src} alt={alt} className="card-img" />
    </div>
  );
}
Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Card;
