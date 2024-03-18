import { updateUser } from "@/app/libs/actions";
import { fetchUser } from "@/app/libs/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { userId } = params;
  const user = await fetchUser(userId);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          className={styles.form}
          action={updateUser}
        >
          <input
            type="hidden"
            name="id"
            value={user.id}
          />
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder={user.name}
          />
          <label>Correo</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
          />
          <label>Telefono</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
