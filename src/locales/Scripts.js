import { useContext } from 'react';
import { UserContext } from '../App';
import { HomeScripts } from './PageScripts/HomeScripts';

export function GetHomeScripts(value) {
    const { language } = useContext(UserContext);
    return HomeScripts(value, language);
}