import { NavLink } from 'react-router-dom';
import '../assets/logo/logo.png';
import '../assets/scss/nav-bar.scss';

export default function Navbar() {
    return (
        <nav>
			<div className="logo">
				<a href='/'><img src={require('../assets/logo/logo.png')} alt="Logo" /> </a>
			</div>
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/presntation"
                    >
                        Presntation
                    </NavLink>
                </li>
				<li>
                    <NavLink
                        exact
                        to="/share"
                    >
                        Share
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/privacy"
                    >
                        Privacy
                    </NavLink>
                </li>
				<li>
                    <NavLink
                        exact
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}