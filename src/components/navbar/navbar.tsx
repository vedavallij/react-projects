import { NavLink } from 'react-router'
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import './navbar.css'

function Navbar() {
    return (

        <nav className="main-nav">
            <div className="nav-left">
                <h5> <NavLink className="logo" to="/Home"> Fruit Hub </NavLink> </h5>
                <NavLink className="Links" to="/Dashboard"> Dashboard </NavLink>
                <NavLink className="Links" to="/Products"> Products </NavLink>
                <NavLink className="Links" to="/Purchases"> Purchases </NavLink>
            </div>
            <div className="nav-right">
                <NavLink className="Links" to="/Contact"> Contact </NavLink>
                <div>
                    <NavLink to="/Login">
                        <AccountCircleIcon className="account" />
                    </NavLink>    
                </div>
            </div>
        </nav>


    )
}

export default Navbar