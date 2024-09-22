import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-10">
            <NavLink to={'/TestForm'}>TestForm</NavLink>
           
           <NavLink  to={'/anotherForm'}>AnotherForm</NavLink>
           
           <NavLink to={'/refform'}>refform</NavLink>
        </div>
    );
};

export default Header;