import { useState } from "react";
import styles from "./SideMenu.module.css";
import { Link } from "react-router-dom";
import { FaCashRegister } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

export default function SideMenu() {
  const [links] = useState([
    { name: "Dashboard", icon: <MdDashboardCustomize />, path: "/" },
    {
      name: "Food and Drinks",
      icon: <IoFastFoodOutline />,
      path: "/order",
    },
    { name: "bills", icon: <FaMoneyBills />, path: "/bills" },
    { name: "Setting", icon: <IoSettings />, path: "/settings" },
  ]);

  return (
    <div
      className="d-flex flex-column px-3 pb-5 justify-content-between "
      id={styles.SideMenu}
    >
      <div className="col-12 d-flex flex-column gap-2">
        <div className="col-12 d-flex align-items-center gap-2 py-3">
          <FaCashRegister className={styles.icon} />
          <p className="m-0 fs-4">
            smart <span id={styles.logo}>POS</span>
          </p>
        </div>

        {links.map((el, index) => {
          return (
            <Link
              to={el.path}
              key={index}
              className={
                "col-12 px-3 nav-link d-flex align-items-center gap-2 " +
                styles.link +
                " " +
                styles.activeLink
              }
            >
              {el.icon}
              <p className="m-0">{el.name}</p>
            </Link>
          );
        })}
      </div>

      <div className="col-12 d-flex flex-column align-items-center">
        <FaRegCircleUser className="fs-3" />

        <img id={styles.userImg} src="" alt="" />
        <h5>user name</h5>
        <p>user role</p>
        <button className="btn btn-primary"> logout</button>
      </div>
    </div>
  );
}
