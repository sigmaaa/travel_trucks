import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./CamperCard.module.css";
import Categories from "../Categories/Categories";
import Rating from "../Rating/Rating";

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    price,
    location,
    rating,
    description,
    gallery = [],
    reviews,
  } = camper;

  const firstImage = gallery.length > 0 ? gallery[0].thumb : "";


  const handleShowMore = () => {
    navigate(id);
  };

  return (
    <div className={css.container}>
      {firstImage && (
        <img className={css.image}
          src={firstImage}
          alt={name}
          width="292px"
          height="320px"
        />
      )}
      <div>
        <div className={css.header}>
          <h2 className={css.name}>{name}</h2>
          <p className={css.price}>€{price}.00</p>
        </div>

        <Rating rating={rating} reviews={reviews} location={location} />
        <div className={css.description}>
          <p>{description}</p>
        </div>

        <Categories camper={camper} />

        <button className={css.showMoreBtn} onClick={handleShowMore}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
