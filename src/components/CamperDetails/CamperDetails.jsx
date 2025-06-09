import Rating from "../Rating/Rating";
import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const { name, price, location, rating, reviews, description, gallery = [] } = camper;

  return (
    <div>
      <section>
        <div className={css.header}>
          <h2 className={css.title}>{name}</h2>
          <Rating rating={rating} reviews={reviews} location={location} />
          <p className={css.price}>€{price}.00</p>
        </div>
        <ul className={css.gallery}>
          {gallery.map(({ original }, index) => {
            return (
              <li key={index}>
                <img className={css.image} src={original} alt={`image ${index + 1}`} height="312" />
              </li>

            );
          })}
        </ul>
        <div>
          <p className={css.description}>{description}</p>
        </div>
      </section>
    </div>
  );
};

export default CamperDetails;
