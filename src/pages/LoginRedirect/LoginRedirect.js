import axios from 'axios';
import moment from 'moment';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function LoginRedirect() {


    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    useEffect(async () => {
        const extension = window.location.search;
        const search = new URLSearchParams(extension);
        const code = search.get('code');

        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/super_ultra_secret_uncreachable_access_token`, {}, {
            headers: {
                authorization: code,
            },
        })

        const token = res.data;
        if (token) {
            setCookie('userToken', token, {
                maxAge: parseInt(moment().format('x')),
            })
            window.opener.location.reload();
            window.close();
        }
    }, [])

    return (
        <div>

        </div>
    )
}