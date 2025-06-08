import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campersSlice";
import CamperCard from "../CamperCard/CamperCard";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  return (
    <div>
      <ul>
        {campers.map((camper) => {
          return (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CamperList;
