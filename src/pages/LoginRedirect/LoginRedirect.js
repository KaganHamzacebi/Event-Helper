import axios from 'axios';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function LoginRedirect() {

    useEffect(() => {
        const url = window.location.href;
        const searchParams = new URLSearchParams(url.substring(url.indexOf('?')));
        if (searchParams.has('error')) window.close();
        else {
            const code = searchParams.get('code');
            axios.get(`${process.env.REACT_APP_SERVER_URL}/super_ultra_secret_uncreachable_access_token`, {
                headers: {
                    authorization: code,
                }
            })
                .then(res => {
                    window.close();
                })
        }
    }, [])

    return (
        <div>

        </div>
    )
}