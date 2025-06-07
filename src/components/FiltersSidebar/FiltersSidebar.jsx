import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters, changeFilter } from "../../redux/filtersSlice";

const FiltersSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [, setSearchParams] = useSearchParams();

  const allForms = ["van", "fully integrated", "alcove"];
  const allEquipment = [
    "AC",
    "kitchen",
    "bathroom",
    "TV",
    "radio",
    "microwave",
    "gas",
    "water",
    "refrigerator",
  ];

  const handleLocationChange = (e) => {
    dispatch(changeFilter({ key: "location", value: e.target.value }));
  };

  const handleFormSelect = (selectedForm) => {
    const newForm = filters.form === selectedForm ? "" : selectedForm;
    dispatch(changeFilter({ key: "form", value: newForm }));
  };

  const toggleEquipment = (item) => {
    dispatch(changeFilter({ key: item, value: !filters[item] }));
  };

  const handleSearchClick = () => {
    const params = {
      ...(filters.location && { location: filters.location }),
      ...(filters.form && { form: filters.form }),
    };

    allEquipment.forEach((item) => {
      if (filters[item]) {
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
              checked={filters[eq]}
              onChange={() => toggleEquipment(eq)}
            />
            {eq}
          </label>
        ))}
      </div>

      <p>Vehicle Type</p>
      <div>
        {allForms.map((t) => (
          <button
            key={t}
            onClick={() => handleFormSelect(t)}
            style={{
              fontWeight: filters.form === t ? "bold" : "normal",
              margin: "5px",
            }}
          >
            {t}
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
