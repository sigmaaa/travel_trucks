import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campersSlice";

const Reviews = () => {
  const { reviews } = useSelector(selectCamper);

  return (
    <div>
      <p>Reviews</p>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <div key={index}>
          <div>{reviewer_name}</div>
          <div>{reviewer_rating}</div>
          <div>{comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
