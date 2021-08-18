import { NextPageContext } from "next";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import { MyUser } from "../interfaces/myUser";
import styles from "../styles/Users.module.scss";

interface UsersPageProps {
  users: MyUser[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <MainContainer keywords="users nex.js" title="Пользователи">
      <h1>Список пользователей</h1>
      <ul className={styles.usersList}>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context: NextPageContext) {
  const response = await fetch(`${process.env.API_URL}/users`);
  const users: MyUser[] = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
