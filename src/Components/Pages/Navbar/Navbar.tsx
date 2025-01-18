import { NavLink } from 'react-router'
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import './Navbar.css'

function Navbar() {
    return (

        <nav className="main-nav">
            <div className="nav-left">
                <MenuIcon className='menu-icon' />
                <NavLink className="Links" to="/Home"> Home </NavLink>
                <NavLink className="Links" to="/Products"> Products </NavLink>
                <NavLink className="Links" to="/Purchases"> Purchases </NavLink>
                <NavLink className="Links" to="/Services"> Services </NavLink>
            </div>
            <div className="nav-right">
                <NavLink className="Links" to="/Contact"> Contact </NavLink>
                <NavLink className="Links" to="/About"> About </NavLink>
                <div className="icon-section">
                    <NavLink to="/Login">
                        <AccountCircleIcon className="account" />
                        {/* <p> Login/SignUp </p> */}
                    </NavLink>
                    
                </div>
            </div>
        </nav>


    )
}

export default Navbar