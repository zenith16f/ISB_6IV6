import Image from "next/legacy/image";
import {
  MdDashboard,
  MdLogout,
  MdOutlineSettings,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={"/noavatar.png"}
          alt={"user profile"}
          width={50}
          height={50}
          className={styles.userImage}
        ></Image>
        <div className={styles.userDetail}>
          <span className={styles.username}>Jhon Doe</span>
          <span className={styles.userEmail}>jhon@doe.com</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>
              {cat.title}
              {cat.list.map((item) => (
                <MenuLink
                  key={item.title}
                  item={item}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
      {/* <button className={styles.logout}>
        <MdLogout size={20} />
        Logout
      </button> */}
    </div>
  );
};

export default Sidebar;
