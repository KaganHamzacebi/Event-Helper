import {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../App';
import {Helmet} from 'react-helmet-async';
import './GuildsPanel.css';
import UserService from '../../service/UserService';
import {getFirstLetters} from "../../utils/stringUtils";

export default function GuildsPanel() {
    const history = useHistory();

    const userService = new UserService();
    const {userToken, userGuilds, setUserGuilds} = useContext(UserContext);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const managedGuildsResponse = await userService.getGuilds(userToken);
            setUserGuilds(managedGuildsResponse.data);
            setReady(true);
        }

        if (userToken) {
            fetchData();
        } else {
            window.location.href = process.env.REACT_APP_WEB_URL;
        }
        // eslint-disable-next-line
    }, [userToken])

    function handleClick(guild) {
        if (guild.bot) {
            history.push(`/dashboard/${guild.id}`)
        } else {
            const clientID = process.env.REACT_APP_CLIENT_ID
            window.open(`https://discord.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot&guild_id=${guild.id}`, '_blank', 'width=520,height=820');
        }
    }

    return (
        <div>
            <Helmet>
                <title>Guilds Panel | Tetherer</title>
                <meta name='robots' content='noindex'/>
            </Helmet>
            <div id="header-wrapper">
                <Header/>
            </div>
            <div className='container mx-auto px-6'>
                <div className='md:px-44 md:py-12 py-4'>
                    <h1 className='text-white font-extrabold text-2xl text-center uppercase pb-4'>Please select a
                        server</h1>
                    {
                        ready ?
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                                {
                                    userGuilds.map(guild => {
                                        return (
                                            <div className="flex flex-col" key={guild.id}>
                                                <div
                                                    className="flex justify-center py-5 bg-gray-800 rounded-lg w-full">
                                                    {
                                                        guild.icon ?
                                                            <img
                                                                className='my-auto h-20 border-2 border-white rounded-full'
                                                                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`}
                                                                alt="guild_icon"
                                                            />
                                                            :
                                                            <div
                                                                className="flex my-auto h-20 w-20 border-2 border-gray-600 rounded-full">
                                                                <span
                                                                    className="m-auto text-3xl font-bold text-gray-300">{getFirstLetters(guild.name, 3)}</span>
                                                            </div>
                                                    }
                                                </div>
                                                <div className="flex mt-2">
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-bold">{guild.name}</span>
                                                        <span
                                                            className="text-gray-400 font-bold text-xs">{guild.owner ? "Owner" : "Manager"}</span>
                                                    </div>
                                                    <div className="flex-grow"></div>
                                                    <div className="bg-dc_blue rounded p-2 max-h-10 w-16 text-center">
                                                        <span
                                                            className="text-white font-bold">{guild.bot ? 'Go' : 'Setup'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            //Placeholders - Shimmer
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                                <div className="flex flex-col">
                                    <div className="flex justify-center py-5 bg-gray-800 rounded-lg w-full h-32">
                                        <div
                                            className="flex my-auto h-20 w-20 border-2 bg-gray-600 border-gray-600 rounded-full animate-pulse transition-color duration-700 group">
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="flex flex-col">
                                            <div className='bg-gray-600 opactiy-10 h-3 w-24 my-auto animate-pulse rounded-full mb-2'></div>
                                            <div className='bg-gray-600 opactiy-10 h-2 w-12 my-auto animate-pulse rounded-full mb-2'></div>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className='bg-gray-600 opactiy-10 ml-4 h-full w-16 my-auto animate-pulse rounded mb-2'></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-center py-5 bg-gray-800 rounded-lg w-full h-32">
                                        <div
                                            className="flex my-auto h-20 w-20 border-2 bg-gray-600 border-gray-600 rounded-full animate-pulse transition-color duration-700 group">
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="flex flex-col">
                                            <div className='bg-gray-600 opactiy-10 h-3 w-24 my-auto animate-pulse rounded-full mb-2'></div>
                                            <div className='bg-gray-600 opactiy-10 h-2 w-12 my-auto animate-pulse rounded-full mb-2'></div>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className='bg-gray-600 opactiy-10 ml-4 h-full w-16 my-auto animate-pulse rounded mb-2'></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-center py-5 bg-gray-800 rounded-lg w-full h-32">
                                        <div
                                            className="flex my-auto h-20 w-20 border-2 bg-gray-600 border-gray-600 rounded-full animate-pulse transition-color duration-700 group">
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="flex flex-col">
                                            <div className='bg-gray-600 opactiy-10 h-3 w-24 my-auto animate-pulse rounded-full mb-2'></div>
                                            <div className='bg-gray-600 opactiy-10 h-2 w-12 my-auto animate-pulse rounded-full mb-2'></div>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className='bg-gray-600 opactiy-10 ml-4 h-full w-16 my-auto animate-pulse rounded mb-2'></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-center py-5 bg-gray-800 rounded-lg w-full h-32">
                                        <div
                                            className="flex my-auto h-20 w-20 border-2 bg-gray-600 border-gray-600 rounded-full animate-pulse transition-color duration-700 group">
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="flex flex-col">
                                            <div className='bg-gray-600 opactiy-10 h-3 w-24 my-auto animate-pulse rounded-full mb-2'></div>
                                            <div className='bg-gray-600 opactiy-10 h-2 w-12 my-auto animate-pulse rounded-full mb-2'></div>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className='bg-gray-600 opactiy-10 ml-4 h-full w-16 my-auto animate-pulse rounded mb-2'></div>
                                    </div>
                                </div>
                            </div>

                    }

                </div>
            </div>
            <div id="footer-wrapper">
                <Footer/>
            </div>
        </div>
    )
}