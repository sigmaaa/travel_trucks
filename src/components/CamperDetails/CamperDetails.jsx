import React from "react";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campersSlice";

const CamperDetails = () => {
  const camper = useSelector(selectCamper);

  const { name, price, location, rating, description, gallery = [] } = camper;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{location}</p>
      <p>{rating}</p>
      {gallery.map(({ original }, index) => {
        return (
          <ul key={index}>
            <li>
              <img src={original} alt={`Gallery image ${index + 1}`} />
            </li>
          </ul>
        );
      })}
      <p>{description}</p>
    </div>
  );
};

export default CamperDetails;
