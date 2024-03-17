import Pagination from "@/app/ui/dashboard/pagination/pagination";
import SearchComponent from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchComponent placeholder={"Buscar un usuario"} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addBtn}>Agregar Usuario</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Correo</td>
            <td>Fechad de creacion</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>Jhon Doe</div>
            </td>
            <td>jhon@doe.com</td>
            <td>41/02/2023</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/dashboard/users/1"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    Detalles
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default UsersPage;
