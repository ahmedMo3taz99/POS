import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import catImg from "../../assets/images/cartegores/wok.png";

export default function CategoryProducts() {
  const params = useParams();
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const [category] = useState([
    { name: "Cold Drink", path: "cold", imgUrl: { catImg }, price: 500 },
    { name: "Burger", path: "burger", imgUrl: { catImg }, price: 600 },
    { name: "Pizza", path: "pizza", imgUrl: { catImg }, price: 500 },
    { name: "Wok", path: "wok", imgUrl: { catImg }, price: 600 },
    {
      name: "Desserts",
      path: "desserts",
      imgUrl: { catImg },
      price: 650,
    },
    { name: "Pasta", path: "pasta", imgUrl: { catImg }, price: 300 },
  ]);

  useEffect(() => {
    // let routes = ["burger", "pizza", "pasta"];

    // filter => find
    // let obj = category.find((el) => {
    //   return el.name == "Pizza";
    // });
    // console.log(obj);

    //filter (hight order function )
    //find, filter, findIndex , map , reduce ,  forEach , every , same
    //function  that take a function as a prarams

    let obj = category.find((el) => {
      return el.path == params.catName;
    });

    if (obj) {
      setCheck(true);
    } else {
      navigate("/error");
    }
    // eslint-disable-next-line
  }, []);
  return check && <div>products in {params.catName}</div>;
}
