import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { dispatchType } from "../../redux/store";
import { toggleMenu } from "../../redux/slices/toggleMenuSlice";

interface Props {
  children?: string;
  icon?: any;
  to?: string;
}
const ItemOfNavbar = ({ children, icon, to }: Props) => {
  const dispatch = useDispatch<dispatchType>();
  return (
    <NavLink
      to={to as string}
      onClick={() =>
        setTimeout(() => {
          dispatch(toggleMenu());
        }, 500)
      }
    >
      {children ? children : icon}
    </NavLink>
  );
};
//onClick: Su función en este componente es la de que cuando se presione un link en el navbar se cambie el estado de true a false
export default ItemOfNavbar;
