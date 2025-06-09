import { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersOps";
import { selectCamper, selectIsLoading } from "../../redux/campersSlice";
import Loader from "../../components/Loader/Loader";
import BookForm from "../../components/BookForm/BookForm";
import css from "./CatalogDetailsPage.module.css";

function CatalogDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camper = useSelector(selectCamper);

  const navClasses = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById({ id }));
    }
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : !camper ? (
        <p>No camper with such ID</p>
      ) : (
        <div>
          <CamperDetails camper={camper} />
          <div className={css.navWrapper}>
            <div className={css.nav}>
              <NavLink className={navClasses} to="features">Features</NavLink>
              <NavLink className={navClasses} to="reviews">Reviews</NavLink>
            </div>
            <div className={css.vector} />
          </div>
          <div className={css.details}>
            <div className={css.detailsItem}>
              <Outlet />
            </div>
            <div className={css.detailsItem}>
              <BookForm />
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default CatalogDetailsPage;
