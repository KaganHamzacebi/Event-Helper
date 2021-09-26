import moment from 'moment';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import UserService from '../../service/UserService';

export default function LoginRedirect() {
    const userService = new UserService();
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(['userToken']);

    useEffect(() => {
        const extension = window.location.search;
        const search = new URLSearchParams(extension);
        const code = search.get('code');

        async function fetchData() {
            const res = await userService.auth(code);
            const token = res.data;

            if (token) {
                setCookie('userToken', token, {
                    maxAge: parseInt(moment().format('x')),
                })
                window.opener.location.href.includes('event') ? window.opener.location.reload() : window.opener.location.href += 'dashboard';
                window.close();
            }
        }
        fetchData();

        // eslint-disable-next-line
    }, [])

    return (
        <div>
        </div>
    )
}