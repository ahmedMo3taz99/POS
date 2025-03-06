import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./assets/pages/Dashboard/Dashboard";
import SideMenu from "./assets/compoments/SideMneu/SideMenu";

export default function App() {
  let acceptedRoutes = ["order", "settings", "bills", ""];
  let url = window.location.href;
  let path = url.split("/")[3];

  // console.log(url.split("/")[3]);

  return (
    <div className="App col-12 d-flex ">
      <BrowserRouter>
        {/* {path != "login" ? <h1> hello</h1> : null} */}
        {/* {path != "login" && <h1>hello</h1>} */}

        {acceptedRoutes.includes(path) && <SideMenu />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<h1>food and drinkes</h1>} />
          <Route path="/settings" element={<h1>settingd</h1>} />
          <Route path="/bills" element={<h1>Bills</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="*" element={<h1>404 page </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
