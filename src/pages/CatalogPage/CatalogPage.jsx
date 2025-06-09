import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import { changeFilter } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";
import CamperList from "../../components/CampersList/CamperList";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  const dispatch = useDispatch();
  const [searchParams, _] = useSearchParams();

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

  return (
    <div className={css.container}>
      <FiltersSidebar />
      <CamperList />
    </div>
  );
}

export default CatalogPage;
