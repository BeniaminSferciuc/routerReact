import style from "./about.module.css";

const about = () => {
    return (
        <div className={style.flex}>
            <img
                className={style.forImg}
                src="https://img.freepik.com/free-photo/low-angle-shot-grey-skyscrapers-front-river-dark-cloudy-sky_181624-7042.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph"
                alt="City"
            />
            <main className={style.main}>
                <h1 className={style.title}>
                    Don't squeeze in a sedan when you could relax in a van.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, maiores ipsum quia vero doloribus quis
                    assumenda aperiam iusto veritatis consequatur ut molestias
                    repellendus nam soluta.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
                    eveniet.
                </p>
                <div className={style.card}>
                    <h3>
                        Your destination is waiting.
                        <br />
                        Your van is ready.
                    </h3>
                    <button className={style.btn}>Explore our vans</button>
                </div>
            </main>
            <footer>
                <small>© 2023 #VANLIFE</small>
            </footer>
        </div>
    );
};

export default about;
