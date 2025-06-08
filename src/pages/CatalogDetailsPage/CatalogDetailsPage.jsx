import { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersOps";
import { selectCamper, selectIsLoading } from "../../redux/campersSlice";
import Loader from "../../components/Loader/Loader";
import BookForm from "../../components/BookForm/BookForm";

function CatalogDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camper = useSelector(selectCamper);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById({ id }));
    }
  }, [dispatch, id]);

  return (
    <div>
      {isLoading || !camper ? (
        <Loader />
      ) : (
        <>
          <CamperDetails />
          <ul>
            <li>
              <NavLink to="features">Features</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <BookForm />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default CatalogDetailsPage;
