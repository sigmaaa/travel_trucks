import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectFavoriteIds } from "../../redux/favoritesSlice";
import css from "./Favorite.module.css";

const Favorite = ({ id }) => {
    const dispatch = useDispatch();
    const favoriteIds = useSelector(selectFavoriteIds);
    const isFavorite = favoriteIds.includes(id);

    const handleToggle = () => {
        dispatch(toggleFavorite(id));
    };

    return (
        <button
            className={css.iconButton}
            onClick={handleToggle}
            aria-label="Toggle favorite"
        >
            <svg
                className={`${css.icon} ${isFavorite ? css.active : css.notActive}`}
                width="26"
                height="24"
                viewBox="0 0 26 24"
            >
                <use href={"/icons.svg#hearth"}></use>
            </svg>
        </button>
    );
};

export default Favorite;
