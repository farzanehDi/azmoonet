import axios from "axios";
import {Routers} from "../utilities/configUrl";

export const checkRegisterInfo = (number = localStorage.getItem("loginInfo")) => {

    return (dispatch) => {

        dispatch({type: "loading", payload: true});

        // axios(Routers.CHECK_REGISTER_INFO).then(function (response) {
        //
        //     dispatch({type: "loading", payload: false});
        //     console.log('register info', response.data);
        //
        //     dispatch({type: "personalInfo", payload: response.data.forms.personalinfo});
        //     dispatch({type: "contactInfo", payload: response.data.forms.contactinfo});
        //     dispatch({type: "professionalInfo", payload:response.data.forms.professionalinfo});
        //
        // }).catch(function (error) {
        //
        //     dispatch({
        //         type: "loading",
        //         payload: false
        //     });
        //
        // });
    }

};