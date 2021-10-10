import './Dashboard.css'
import {Element} from 'react-scroll';
import {UserContext} from '../../App';
import React, {createContext, useContext, useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {useRouteMatch} from 'react-router';

/* Pages */
import DashboardMenu from './DashboardComponents/DashboardMenu/DashboardMenu';
import GuildService from '../../service/GuildService';
import DashboardSidebar from "./DashboardComponents/DashboardSidebar";
import DashboardTopbar from "./DashboardComponents/DashboardTopbar";

export const GuildSettingsContext = createContext(null);
export const DashboardContext = createContext(null);

export default function Dashboard() {
    let {path, url} = useRouteMatch();
    const {id} = useParams();
    const {user, userToken} = useContext(UserContext);
    const [guildSettings, setGuildSettings] = useState([]);

    const [mappedGuilds, setMappedGuilds] = useState([]);
    const [indexGuild, setIndexGuild] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const guildService = new GuildService();

    useEffect(() => {
        async function fetchData() {
            const guildSettingsResponse = await guildService.getGuildSettings(userToken, id);
            setGuildSettings(guildSettingsResponse.data);
        }

        if (userToken) {
            fetchData();
        } else {
            window.location.href = process.env.REACT_APP_WEB_URL;
        }
        // eslint-disable-next-line
    }, [userToken])

    useEffect(() => {
        if (guildSettings) {
            setMappedGuilds(guildSettings.map((item, index) => {
                if (item.id == id) {
                    setIndexGuild(index);
                }
                if (item.icon) {
                    return {label: item.name, icon: item.icon, value: item.id};
                }
                return {
                    label: item.name,
                    value: item.id
                };

            }))
        }
    }, [guildSettings])

    return (
        <div className='flex w-full h-full'>
            <Helmet>
                <title>Dashboard | Tetherer</title>
                <meta name='robots' content='noindex'/>
            </Helmet>
            {/* Sidebar */}
            <DashboardContext.Provider value={{isOpen, setIsOpen, indexGuild, mappedGuilds}}>
                <DashboardSidebar/>
            </DashboardContext.Provider>
            <div className='flex flex-col flex-grow w-screen'>
                {/* Topbar */}
                <DashboardContext.Provider value={{isOpen, setIsOpen}}>
                    <DashboardTopbar/>
                </DashboardContext.Provider>
                {/* Content */}
                <Element id='dashboardScrollContainer'
                         className='element p-4 md:p-12 flex flex-col bg-content overflow-y-auto dashboard-content-wrapper'>
                    {/* Inner Content */}
                    <div className='flex-grow rounded w-full'>
                        <GuildSettingsContext.Provider value={guildSettings}>
                            <DashboardMenu/>
                        </GuildSettingsContext.Provider>
                    </div>
                </Element>
            </div>
        </div>
    )
}