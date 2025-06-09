import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campersSlice";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { reviews } = useSelector(selectCamper);

  return (
    <div className={css.container}>
      {reviews.length > 0 ? (
        <ul className={css.reviesList}>
          {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
            <li className={css.reviewItem} key={index}>
              <div className={css.header}>
                <div className={css.icon}>{reviewer_name[0]}</div>
                <div className={css.name}>
                  <p>{reviewer_name}</p>
                  <div className={css.stars}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={`star-${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className={
                          i < reviewer_rating
                            ? css.filledStar
                            : css.emptyStar
                        }
                      >
                        <use href="/icons.svg#star" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}

    </div>
  );
};

export default Reviews;
