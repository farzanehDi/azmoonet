import React, {useState} from 'react';
import Logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Header = () => {

    const LogoImage = styled.img`
      max-width: 120px;
    `;

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    };

    return (
        <header>
            <div className={'bg-gold absolute top-0 right-0 left-0'}>
                <div className={"bg-light py-1 mt-7"}>
                    <div className={'container flex items-start sm:items-center justify-between'}>
                        <div>
                            <div className="cursor-pointer sm:hidden">
                                <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
                                <label
                                    className="menu-icon block cursor-pointer sm:hidden px-2 py-4 relative select-none"
                                    htmlFor="menu-btn">
                                    <span onClick={handleToggle} className="navicon flex items-center relative"></span>
                                </label>
                            </div>
                            <div className={toggleMenu ? "md:flex md:pt-0 pt-3 w-full sm:w-auto" : "hidden sm:flex"}
                                 id="menu">
                                <ul className={''}>
                                    <li className="sm:inline-block hover:text-gold py-2 ml-16">
                                        <NavLink to={''}>ورود</NavLink>
                                    </li>
                                    <li className="dropdown sm:inline-block hover:text-gold py-2 ml-16">
                                        <NavLink to={''}>ارتباط با ما</NavLink>
                                    </li>
                                    <li className="sm:inline-block hover:text-gold py-2 ml-16">
                                        <NavLink to={''}>آزمون ها</NavLink>
                                    </li>
                                    <li className="sm:inline-block hover:text-gold py-2">
                                        <NavLink to={''}>تحلیل آزمون ها</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <LogoImage src={Logo} alt={'آزمونت'} className={`-mt-4`}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;