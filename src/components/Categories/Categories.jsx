import css from "./Categories.module.css";

const FEATURES_KEYS = [
    "automatic",
    "ac",
    "petrol",
    "kitchen",
    "radio",
    "bathroom",
    "microwave",
    "gas",
    "water",
];

const Categories = ({ camper }) => {
    const isEnabled = (key) => {
        if (key === "automatic") return camper.transmission === "automatic";
        if (key === "petrol") return camper.engine === "petrol";
        return camper[key];
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <ul className={css.container}>
            {FEATURES_KEYS.map((key) =>
                isEnabled(key) ? (
                    <li key={key} className={css.item}>
                        <svg
                            className={css.icon}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <use href={`/icons.svg#${key}`} />
                        </svg>
                        <p>{capitalize(key)}</p>
                    </li>
                ) : null
            )}
        </ul>
    );
};

export default Categories;
