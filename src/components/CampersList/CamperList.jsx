import { useSelector } from "react-redux";
import { selectCampers, selectCurrentPage, selectError, selectIsLoading, selectTotalCampers } from "../../redux/campersSlice";
import CamperCard from "../CamperCard/CamperCard";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import Loader from "../Loader/Loader";
import css from "./CamperList.module.css";



const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: currentPage + 1, limit: 4 }));
  };


  return (
    <div>
      {isLoading && <Loader />}
      {error && <p className={css.error}>Error: {error}</p>}

      {!error && (
        <>
          <ul className={css.camperList}>
            {campers.map((camper) => (
              <li key={camper.id} className={css.camperItem}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>

          {campers.length < total && (
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className={css.loadMoreBtn}
            >
              {isLoading ? "Loading..." : "Load more"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CamperList;
