import { deleteUser } from "@/app/libs/actions";
import { fetchUsers } from "@/app/libs/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import SearchComponent from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";

  const users = await fetchUsers(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchComponent placeholder={"Buscar un usuario"} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addButton}>Agregar Usuario</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Correo</td>
            <td>Fecha de creacion</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.id}>
              <td>
                <div className={styles.user}>{user?.name}</div>
              </td>
              <td>{user?.email}</td>
              <td> {user?.createdAt?.toString().slice(4, 16)} </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user?.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Detalles
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input
                      type="hidden"
                      name="id"
                      value={user?.id}
                    />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Eliminar
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default UsersPage;
