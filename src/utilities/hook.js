import {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";


export const useInput = (value) => {

    const [input, setInput] = useState(value);
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    return [input, handleInputChange];
};

export const useCheckbox = () => {

    const [input, setInput] = useState(false);
    const handleCheckboxChange = (e) => {
        setInput(e.target.checked);
    };
    return [input, handleCheckboxChange];
};

export const useViewport = () => {

    const dispatch=useDispatch();
    const [width, setWidth] = useState(window.screen.width);

    useEffect(() => {

        const handleWindowResize = () => {
            setWidth(document.body.clientWidth);
        }

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [dispatch, width]);

    return {width};
}




