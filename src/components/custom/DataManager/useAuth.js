import {useDispatch} from "react-redux";
import {acLogin} from "../../../redux/actions/acUser";

export const useAuth = () => {
    const token = localStorage.getItem('token');

    const dispatch = useDispatch();

    if(token) {
        dispatch(acLogin(token));
    }
};
