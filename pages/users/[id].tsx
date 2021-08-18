import { NextPageContext } from "next";
import MainContainer from "../../components/MainContainer";
import { MyUser } from "../../interfaces/myUser";
import styles from "../../styles/User.module.scss";

interface UserPageProps {
  user: MyUser;
}

export default function User({ user }: UserPageProps) {
  return (
    <MainContainer keywords={user.name} title={user.name}>
      <div className={styles.user}>
        <h1>Пользователь с id {user.id}</h1>
        <ul className={styles.userInfo}>
          <li>Имя пользователя - {user.name}</li>
          <li>Nickname пользователя - {user.username}</li>
          <li>
            Email пользователя -{" "}
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
          <li>
            Телефон пользователя -{" "}
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </li>
          <li>
            Сайт пользователя - <a href={user.website}>{user.website}</a>
          </li>
        </ul>
      </div>
    </MainContainer>
  );
}

interface UserNextContextPage extends NextPageContext {
  query: {
    id: string;
  };
}

export async function getServerSideProps({ query }: UserNextContextPage) {
  const response = await fetch(`${process.env.API_URL}/users/${query.id}`);
  const user: MyUser = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
