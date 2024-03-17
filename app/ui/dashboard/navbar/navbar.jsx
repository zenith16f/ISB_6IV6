"use client";
import { usePathname } from "next/navigation";
import { MdHome, MdInfo } from "react-icons/md";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <MdHome size={20} />
          <MdInfo size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
