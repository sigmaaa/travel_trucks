import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters, changeFilter } from "../../redux/filtersSlice";
import css from "./FiltersSidebar.module.css";

const FiltersSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [, setSearchParams] = useSearchParams();

  const allForms = [
    { label: "Van", value: "panelTruck" },
    { label: "Fully Integrated", value: "fullyIntegrated" },
    { label: "Alcove", value: "alcove" },
  ];
  const allEquipment = ["automatic", "AC", "kitchen", "bathroom", "TV"];

  const handleLocationChange = (e) => {
    dispatch(changeFilter({ key: "location", value: e.target.value }));
  };

  const handleFormSelect = (selectedForm) => {
    const newForm = filters.form === selectedForm ? "" : selectedForm;
    dispatch(changeFilter({ key: "form", value: newForm }));
  };

  const toggleEquipment = (item) => {
    if (item === "automatic") {
      const newValue = filters.transmission === "automatic" ? "" : "automatic";
      dispatch(changeFilter({ key: "transmission", value: newValue }));
    } else {
      dispatch(changeFilter({ key: item, value: !filters[item] }));
    }
  };
  const handleSearchClick = () => {
    const params = {
      ...(filters.location && { location: filters.location }),
      ...(filters.form && { form: filters.form }),
      ...(filters.transmission && { transmission: filters.transmission }),
    };

    allEquipment.forEach((item) => {
      if (item != "transmission" && filters[item]) {
        params[item] = "true";
      }
    });

    setSearchParams(params);
  };

  return (
    <section className={css.container}>

      <label className={css.labelLocation}>Location
        <div className={css.inputWrapper}>
          <input
            className={css.inputLocation}
            type="text"
            name="location"
            value={filters.location}
            onChange={handleLocationChange}
            placeholder="City"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={css.iconMap}
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <use href={"/icons.svg#map"}></use>
          </svg>
        </div>
      </label>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Vehicle equipment</legend>
        <div className={css.divider} />
        <ul className={css.filterList}>
          {allEquipment.map((eq) => (
            <li className={css.item} key={eq}>
              <input
                id={eq}
                className={css.visuallyHidden}
                type="checkbox"
                checked={
                  filters[eq] ||
                  (eq === "automatic" && filters.transmission === "automatic")
                }
                onChange={() => toggleEquipment(eq)}
              />

              <label
                className={css.labelCheckbox}
                htmlFor={eq}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <use href={`/icons.svg#${eq}`}></use>
                </svg>
                {eq.charAt(0).toUpperCase() + eq.slice(1)}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className={css.fieldsetType}>
        <legend className={css.legend}>Vehicle Type</legend>
        <div className={css.divider} />
        <ul className={css.filterList}>
          {allForms.map(({ label, value }) => (
            <li className={css.item} key={value}>
              <input
                type="checkbox"
                id={value}
                name="vehicle-type"
                value={value}
                checked={filters.form === value}
                onChange={() =>
                  handleFormSelect(value)
                }
                className={css.visuallyHidden}
              />
              <label
                htmlFor={value}
                className={`${css.labelCheckbox} ${filters.form === value ? css.active : ""
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <use href={`/icons.svg#${value}`} />
                </svg>
                {label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <button className={css.searchBtn} onClick={handleSearchClick}>
        Search
      </button>
    </section>

  );
};

export default FiltersSidebar;
