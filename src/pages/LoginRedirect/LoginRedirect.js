import moment from 'moment';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function LoginRedirect() {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    useEffect(() => {
        if (!window.location.href.includes('error')) {
            setCookie('userToken', window.location.hash.slice(1), {
                expires: new Date(moment().add(7, 'd')),
                secure: true,
                sameSite: true,
            });
            window.opener.location.reload();
        }
        window.close();
    }, [])

    return (
        <div>

        </div>
    )
}