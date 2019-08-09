import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div >
            <h1>Jeevan Blood Bank</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/fetch'>Show Donor</Link>
                        <Link to='/add'>Add Donor</Link>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;