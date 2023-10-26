import styles from "./home.module.css";

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
                <button className={styles.btn}>Find your van</button>
            </main>
            <footer className={styles.footer}>
                <small>© 2023 #VANLIFE</small>
            </footer>
        </div>
    );
};

export default Home;
