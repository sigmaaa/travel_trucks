import css from "./Rating.module.css";

const Rating = ({ rating, reviews, location }) => {

    return (
        <div className={css.container}>
            <div className={css.rating}>
                <svg
                    className={css.iconStar}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                >
                    <use href={"/icons.svg#star"} />
                </svg>
                <p>
                    {rating}
                    {reviews.length > 0 && `(${reviews.length} Reviews)`}
                </p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={css.iconMap}
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
                <use href={"/icons.svg#map"}></use>
            </svg>
            <p>{location}</p>

        </div>
    );
}

export default Rating