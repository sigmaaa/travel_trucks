import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campersSlice";

const Features = () => {
  const camper = useSelector(selectCamper);
  const {
    transmission,
    AC,
    engine,
    kitchen,
    radio,
    bathroom,
    refrigerator,
    microwave,
    gas,
    water,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  const details = {
    Form: form,
    Length: length,
    Width: width,
    Height: height,
    Tank: tank,
    Consumption: consumption,
  };

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
  return (
    <div>
      <p>Features</p>
      <ul>
        {Object.entries(features).map(
          ([label, isEnabled]) => isEnabled && <li key={label}>{label}</li>
        )}
      </ul>
      <p>Vehicle details</p>
      <hr></hr>
      <ul>
        {Object.entries(details).map(([label, value]) => (
          <li key={label}>
            {label}-{value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
