import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters, changeFilter } from "../../redux/filtersSlice";

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
    <div>
      <p>Location</p>
      <input
        type="text"
        value={filters.location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />

      <p>Equipment</p>
      <div>
        {allEquipment.map((eq) => (
          <label key={eq} style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={
                filters[eq] ||
                (eq === "automatic" && filters.transmission === "automatic")
              }
              onChange={() => toggleEquipment(eq)}
            />
            {eq.charAt(0).toUpperCase() + eq.slice(1)}
          </label>
        ))}
      </div>

      <p>Vehicle Type</p>
      <div>
        {allForms.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => handleFormSelect(value)}
            style={{
              fontWeight: filters.form === value ? "bold" : "normal",
              margin: "5px",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <button onClick={handleSearchClick} style={{ marginTop: "1rem" }}>
        Search
      </button>
    </div>
  );
};

export default FiltersSidebar;
