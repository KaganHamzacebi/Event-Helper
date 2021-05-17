import { useCookies } from 'react-cookie';
import './Loading.css';

export default function Loading() {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    return (
        <div>
            <div className="loader">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </div>
    )
}