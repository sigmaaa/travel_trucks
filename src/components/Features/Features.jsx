import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campersSlice";
import css from "./Features.module.css";
import Categories from "../Categories/Categories";

const Features = () => {
  const camper = useSelector(selectCamper);
  const {
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

  return (
    <section className={css.container}>
      <Categories camper={camper} />
      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.divider}></div>
      <ul className={css.details}>
        {Object.entries(details).map(([label, value]) => (
          <li className={css.detail} key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
