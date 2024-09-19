import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/TestForm'}>TestForm</NavLink>
        </div>
    );
};

export default Header;