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

function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: currentPage + 1, limit: 4 }));
  };

  return (
    <div>
      <aside>
        <FiltersSidebar />
      </aside>

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
