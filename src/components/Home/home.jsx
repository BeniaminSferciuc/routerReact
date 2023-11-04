import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>You got the travel plans, we got the travel vans.</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem quo nisi animi. Totam consectetur nostrum ipsum corrupti
                    minus. Dolorum incidunt doloremque ipsam perspiciatis
                    deleniti fuga!
                </p>
                <Link to='/vans' className={styles.btn}>Find your van</Link>
            </main>
        </div>
    )
}

export default Home;
