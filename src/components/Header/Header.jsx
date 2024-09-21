import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/TestForm'}>TestForm</NavLink>
           <div className="pl-7">
           <NavLink  to={'/anotherForm'}>AnotherForm</NavLink>
           </div>
        </div>
    );
};

export default Header;