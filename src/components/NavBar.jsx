import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={{fontSize:'24px'}}>
            <NavLink to='/' style={{marginRight:'50px'}}>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>

        </div>
    );
};

export default NavBar;