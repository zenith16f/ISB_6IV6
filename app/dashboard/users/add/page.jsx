import { addUser } from "@/app/libs/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action={addUser}
      >
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          required
        />
        <input
          type="phone"
          placeholder="Numero de telefono"
          name="phone"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
