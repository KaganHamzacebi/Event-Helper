import { useContext } from 'react';
import { UserContext } from '../App';
import { HeaderScripts } from './PageScripts/HeaderScripts';
import { HomeScripts } from './PageScripts/HomeScripts';

export function GetHomeScripts(value) {
    const { language } = useContext(UserContext);
    return HomeScripts(value, language);
}

export function GetHeaderScripts(value) {
    const { language } = useContext(UserContext);
    return HeaderScripts(value, language);
}