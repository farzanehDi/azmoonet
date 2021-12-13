import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {slide as Menu} from "react-burger-menu";
import openMenu from "../../assets/images/menu.png";
import closeMenu from "../../assets/images/close.png";
import {NavLink} from "react-router-dom";
// import {useSelector} from "react-redux";
import {useViewport} from "../../utilities/hook";
import Style from './sidebar.module.css';


const Sidebar = (props) => {

    const dispatch = useDispatch();
    const {width} = useViewport();
    const [statusIcon, setStatusIcon] = useState(openMenu)
    // const isLogin = useSelector(state => state.auth.isLogin);
    const [open, setOpen] = useState();

    const handleClick = (event) =>  {
        setOpen(false);
    };

    useEffect(()=>{
       width>550?setOpen(true):setOpen(false);
    },[width])

    useEffect(() => {
        if(width<=550){
            const elements = document.querySelectorAll('a');
            Array.from(elements).forEach((element) => {
                element.addEventListener('click', handleClick)
            })

            return () => {
                Array.from(elements).forEach((element) => {
                    element.removeEventListener('click', handleClick)
                })
            }
        }

    }, [])


    const handleStateChange = (status) => {
        setOpen(status.isOpen);
        if (status.isOpen) {
            setStatusIcon(closeMenu);
        } else {
            setStatusIcon(openMenu);
        }
    }

    return (

        <Menu isOpen={open} width={200} right noOverlay
              customBurgerIcon={<img src={statusIcon} alt={'menu'}/>}
              className={`${width>550?'top-24':'top-16'} right-0`}
              onStateChange={(state) => handleStateChange(state)}
              burgerButtonClassName={`${width<=550?'fixed right-5 top-5':'hidden'}`}
              menuClassName={`bg-dark w-full ${Style.menuClass}`}
              itemListClassName={`right-0 pt-5 ${Style.bmItemList}`}
              pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }  >
            <div
                className={`${Style.bmItem} flex-col  justify-center ${width <= 550 ? 'divide-y divide-gray-lighter' : ''}`}>
                <NavLink to={"/profile"} activeClassName={Style.activeLink}>
                    درس های من
                </NavLink>

                <NavLink to={"/"} activeClassName={Style.activeLink}>
                    آزمون های من
                </NavLink>

                <NavLink to={"/"} activeClassName={Style.activeLink}>
                    درسنامه های من
                </NavLink>
                <NavLink to={"/"} activeClassName={Style.activeLink}>
                    سوال های ستاره دار
                </NavLink>
                <NavLink to={"/"} activeClassName={Style.activeLink}>
                    رتبه من
                </NavLink>


            </div>


        </Menu>

    );
};
export default Sidebar;