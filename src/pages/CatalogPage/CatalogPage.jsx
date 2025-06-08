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
import { changeFilter, selectFilters } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";
import CamperList from "../../components/CampersList/CamperList";

function CatalogPage() {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    const filters = {};

    for (const [key, value] of searchParams.entries()) {
      filters[key] = value === "true" ? true : value;
      dispatch(changeFilter({ key, value: filters[key] }));
    }
    console.log(filters);
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
      <CamperList />
      {campers.length < total && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}

export default CatalogPage;
