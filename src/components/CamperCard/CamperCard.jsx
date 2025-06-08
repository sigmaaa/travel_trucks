import React from "react";
import { useNavigate } from "react-router-dom";

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
    AC,
    kitchen,
    radio,
    bathroom,
    refrigerator,
    microwave,
    gas,
    water,
    transmission,
    engine,
  } = camper;

  const firstImage = gallery.length > 0 ? gallery[0].thumb : "";

  const features = {
    Automatic: transmission === "automatic",
    AC,
    Petrol: engine === "petrol",
    Kitchen: kitchen,
    Radio: radio,
    Bathroom: bathroom,
    Refrigerator: refrigerator,
    Microwave: microwave,
    Gas: gas,
    Water: water,
  };

  const handleShowMore = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div>
      {firstImage && (
        <img src={firstImage} alt={name} width={300} height="auto" />
      )}

      <h3>{name}</h3>
      <p>€{price}</p>
      <p>{rating} stars</p>
      <p>{location}</p>
      <p>{description}</p>

      <ul>
        {Object.entries(features).map(
          ([label, isEnabled]) => isEnabled && <li key={label}>{label}</li>
        )}
      </ul>

      <button onClick={handleShowMore}>Show more</button>
    </div>
  );
};

export default CamperCard;
