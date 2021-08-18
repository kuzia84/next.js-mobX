import Head from "next/head";
import A from "./A";
import styles from "../styles/MainContainer.module.scss";

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={"next.js " + keywords}></meta>
        <title>{title} | Next.js</title>
      </Head>
      <nav className={styles.navbar}>
        <ul className={styles.nav}>
          <li>
            <A href="/" text="Главная" />
          </li>
          <li>
            <A href="/users" text="Пользователи" />
          </li>
          <li>
            <A href="/counter" text="Счетчик" />
          </li>
          <li>
            <A href="/todos" text="Список дел" />
          </li>
        </ul>
      </nav>
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};

export default MainContainer;
