import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./assets/pages/Dashboard/Dashboard";
import SideMenu from "./assets/compoments/SideMneu/SideMenu";
import { useEffect, useState } from "react";
import CategoryProducts from "./assets/CategoryProducts/CategoryProducts";

export default function App() {
  const [category] = useState([
    { name: "Cold Drink", path: "cold", price: 500 },
    { name: "Burger", path: "burger", price: 600 },
    { name: "Pizza", path: "pizza", price: 500 },
    { name: "Wok", path: "wok", price: 600 },
    { name: "Desserts", path: "desserts", price: 650 },
    { name: "Pasta", path: "pasta", price: 300 },
  ]);

  let catsRoutes = category.map((el) => {
    return "/order/" + el.path;
  });

  let acceptedRoutes = ["/order", "/settings", "/bills", "/", ...catsRoutes];

  // let url = window.location.href;
  // let path = url.split("/")[3];

  // let path = "order";
  // console.log(location.pathname);

  const [path, setPath] = useState();
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="App col-12 d-flex ">
      {/* {path != "login" ? <h1> hello</h1> : null} */}
      {/* {path != "login" && <h1>hello</h1>} */}

      {acceptedRoutes.includes(path) && <SideMenu />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order" element={<h1>food and drinkes</h1>} />

        <Route path="/order/:catName" element={<CategoryProducts />} />

        <Route path="/settings" element={<h1>settingd</h1>} />
        <Route path="/bills" element={<h1>Bills</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="*" element={<h1>404 page </h1>} />
      </Routes>
    </div>
  );
}
