import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

function HomePage() {
    const navigate = useNavigate();
    return (
        <section className={css.container}>
            <div>
                <h1 className={css.title}>Campers of your dreams</h1>
                <h2 className={css.slogan}>
                    You can find everything you want in our catalog
                </h2>
                <button className={css.HeroBtn} onClick={() => navigate("/catalog")}>
                    View Now
                </button>
            </div>
        </section>
    );

}

export default HomePage
