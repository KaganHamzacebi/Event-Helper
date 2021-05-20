import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './GuildsPanel.css';

export default function GuildsPanel() {
    const history = useHistory();

    const { user, setUser, userGuilds, setUserGuilds, userToken } = useContext(UserContext);
    const [managedGuilds, setManagedGuilds] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(async () => {
        if (userToken) {
            const managedGuildsResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/@me/guilds`, {}, {
                headers: {
                    authorization: userToken,
                }
            });
            console.log(managedGuildsResponse.data);
            setManagedGuilds(managedGuildsResponse.data);
            setReady(true);
        }
        else {
            window.location.href = process.env.REACT_APP_WEB_URL;
        }
    }, [])

    function handleClick(guild) {
        if (guild.bot) {
            history.push(`/dashboard/${guild.id}`)
        }
        else {
            window.open(`https://discord.com/api/oauth2/authorize?client_id=833070237247209499&permissions=8&scope=bot&guild_id=${guild.id}`, '_blank', 'width=520,height=820');
        }
    }

    return (
        <div className='container h-full mx-auto px-6 2xl:px-40'>
            <div className='md:px-60 md:py-12 py-4'>
                <h1 className='text-white font-extrabold text-2xl text-center uppercase pb-4'>Please select a server</h1>
                {
                    ready ?
                        <div>
                            {
                                managedGuilds.map(guild => {
                                    return <div key={guild.id} className='flex border border-gray-700 hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2 cursor-pointer'>
                                        <div
                                            className='flex-grow p-2 rounded my-auto whitespace-nowrap truncate'
                                            onClick={() => handleClick(guild)}
                                        >
                                            {
                                                guild.icon ?
                                                    <img className='h-8 rounded-full inline-block mr-2'
                                                        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`}
                                                        alt=""
                                                    />
                                                    :
                                                    <img className='h-6 rounded-full inline-block mr-2'
                                                        src='https://discord.com/assets/3437c10597c1526c3dbd98c737c2bcae.svg'
                                                        alt=""
                                                    />
                                            }
                                            <span className='text-lg font-bold text-primary'>{guild.name}</span>
                                        </div>
                                        <div className={`bg-gray-500 bg-opacity-20 ${guild.bot ? 'group-hover:bg-blue-600' : 'group-hover:bg-green-600'} transition duration-700 rounded-r p-4`}>
                                            <span className={`h-full rounded font-bold text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>{guild.bot ? 'Go To Dashboard' : 'Add to Server'}</span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        :
                        //Placeholders - Shimmer
                        <div>
                            <div className='flex border border-gray-700 animate-pulse hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2'>
                                <div className='bg-gray-200 opacity-10 animate-pulse w-8 h-8 rounded-full ml-2 my-auto'></div>
                                <div className='inline-block flex-grow my-auto'>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-6/12 my-auto animate-pulse rounded-full mb-2'></div>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-8/12 my-auto animate-pulse rounded-full'></div>
                                </div>
                                <div className='flex-grow'></div>
                                <div className={`bg-gray-200 bg-opacity-10 animate-pulse rounded-r p-4`}>
                                    <span className={`h-full w- rounded font-bold opacity-0 text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>Go To Dashboard</span>
                                </div>
                            </div>
                            <div className='flex border border-gray-700 animate-pulse hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2'>
                                <div className='bg-gray-200 opacity-10 animate-pulse w-8 h-8 rounded-full ml-2 my-auto'></div>
                                <div className='inline-block flex-grow my-auto'>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-6/12 my-auto animate-pulse rounded-full mb-2'></div>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-8/12 my-auto animate-pulse rounded-full'></div>
                                </div>
                                <div className='flex-grow'></div>
                                <div className={`bg-gray-200 bg-opacity-10 animate-pulse rounded-r p-4`}>
                                    <span className={`h-full w- rounded font-bold opacity-0 text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>Go To Dashboard</span>
                                </div>
                            </div>
                            <div className='flex border border-gray-700 animate-pulse hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2'>
                                <div className='bg-gray-200 opacity-10 animate-pulse w-8 h-8 rounded-full ml-2 my-auto'></div>
                                <div className='inline-block flex-grow my-auto'>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-6/12 my-auto animate-pulse rounded-full mb-2'></div>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-8/12 my-auto animate-pulse rounded-full'></div>
                                </div>
                                <div className='flex-grow'></div>
                                <div className={`bg-gray-200 bg-opacity-10 animate-pulse rounded-r p-4`}>
                                    <span className={`h-full w- rounded font-bold opacity-0 text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>Go To Dashboard</span>
                                </div>
                            </div>
                            <div className='flex border border-gray-700 animate-pulse hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2'>
                                <div className='bg-gray-200 opacity-10 animate-pulse w-8 h-8 rounded-full ml-2 my-auto'></div>
                                <div className='inline-block flex-grow my-auto'>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-6/12 my-auto animate-pulse rounded-full mb-2'></div>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-8/12 my-auto animate-pulse rounded-full'></div>
                                </div>
                                <div className='flex-grow'></div>
                                <div className={`bg-gray-200 bg-opacity-10 animate-pulse rounded-r p-4`}>
                                    <span className={`h-full w- rounded font-bold opacity-0 text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>Go To Dashboard</span>
                                </div>
                            </div>
                            <div className='flex border border-gray-700 animate-pulse hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2'>
                                <div className='bg-gray-200 opacity-10 animate-pulse w-8 h-8 rounded-full ml-2 my-auto'></div>
                                <div className='inline-block flex-grow my-auto'>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-6/12 my-auto animate-pulse rounded-full mb-2'></div>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-8/12 my-auto animate-pulse rounded-full'></div>
                                </div>
                                <div className='flex-grow'></div>
                                <div className={`bg-gray-200 bg-opacity-10 animate-pulse rounded-r p-4`}>
                                    <span className={`h-full w- rounded font-bold opacity-0 text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>Go To Dashboard</span>
                                </div>
                            </div>
                            <div className='flex border border-gray-700 animate-pulse hover:border-gray-400 transition-color duration-700 group mt-2 rounded-lg mx-2'>
                                <div className='bg-gray-200 opacity-10 animate-pulse w-8 h-8 rounded-full ml-2 my-auto'></div>
                                <div className='inline-block flex-grow my-auto'>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-6/12 my-auto animate-pulse rounded-full mb-2'></div>
                                    <div className='bg-gray-200 opactiy-10 h-1 ml-4 w-8/12 my-auto animate-pulse rounded-full'></div>
                                </div>
                                <div className='flex-grow'></div>
                                <div className={`bg-gray-200 bg-opacity-10 animate-pulse rounded-r p-4`}>
                                    <span className={`h-full w- rounded font-bold opacity-0 text-primary hover:bg-opacity-50 focus:outline-none whitespace-nowrap`} type='submit'>Go To Dashboard</span>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div >
    )
}