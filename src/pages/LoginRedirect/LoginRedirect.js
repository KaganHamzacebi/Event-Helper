import { useState, useEffect } from 'react';

export default function LoginRedirect() {

    useEffect(() => {
        window.opener.postMessage(window.location.hash.slice(1), 'http://localhost:3000/login_redirect');
        window.close();
    }, [])

    return (
        <div>

        </div>
    )
}