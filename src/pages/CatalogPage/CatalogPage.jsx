import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCurrentPage,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/campersSlice";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import CamperCard from "../../components/CamperCard/CamperCard";
import { changeFilter, selectFilters } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";

function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filterKeys = [
      "location",
      "form",
      "transmission",
      "AC",
      "bathroom",
      "kitchen",
      "TV",
      "radio",
      "refrigerator",
      "microwave",
      "gas",
      "water",
    ];

    const filters = filterKeys.reduce((acc, key) => {
      const val = searchParams.get(key);
      if (val !== null) {
        acc[key] = val === "true" ? true : val;
      }
      return acc;
    }, {});

    for (const [key, value] of Object.entries(filters)) {
      dispatch(changeFilter({ key, value }));
    }

    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
        filters,
      })
    );
  }, [dispatch, searchParams]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: currentPage + 1, limit: 4 }));
  };

  return (
    <div>
      <FiltersSidebar />

      <ul>
        {campers.map((camper) => {
          return (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          );
        })}
      </ul>

      {campers.length < total && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}

export default CatalogPage;
