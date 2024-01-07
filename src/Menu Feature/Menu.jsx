import { useLoaderData } from "react-router-dom";
import { getMenu } from "../Services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y-2 divide-slate-400 px-3 ">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function Loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
