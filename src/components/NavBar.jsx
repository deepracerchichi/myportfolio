import React from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src='/logo.svg' alt="my logo"/>

                <ul>
                    {navLinks.map(({label}) => (
                        <li key={label}>
                            <a href={label}> {label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/cart.svg" alt="Resume GOES HERE"/>
                    </button>
                    <button>
                        <img src="/search.svg" alt="Resume GOES HERE"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
