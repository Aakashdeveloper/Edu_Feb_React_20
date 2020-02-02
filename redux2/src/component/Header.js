import React from 'react';
import { Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">
                <h1>Redux News</h1>
                </Link>
            </div>
        </header>
    )

}

export default Header