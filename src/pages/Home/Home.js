import './Home.css';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';
import { metaData } from '../../utils/MetaData';
import { Zoom, Slide } from "react-awesome-reveal";
import ExampleVideo from '../../assets/example.webm';

export default function Home() {

    function handleLogin() {
        window.open(`https://discord.com/api/oauth2/authorize?client_id=833070237247209499&permissions=8&scope=bot`, '_blank', 'width=520,height=820');
    }

    return (
        <div className='w-full'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Home | Tetherer</title>
                <meta
                    name='description'
                    content='Tetherer is a discord bot which lets you create widely customizable events to bring people together. Tetherer offers you various options and strong integrations.'
                    data-react-helmet='true'
                />
                <meta name='keywords' content='Tetherer, Discord, event, events, options, integrations, zoom, google, calendar, raid, guild, meeting, fast, simple' />
                <link rel="canonical" href={process.env.REACT_APP_WEB_URL} />
                <script className='structured-data-list' type="application/ld+json">{metaData()}</script>
            </Helmet>
            <main>
                <div className="container mx-auto px-6 2xl:px-40">
                    <Zoom triggerOnce>
                        {/* First Look Part */}
                        <div className='pb-14 pt-20 text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 mx-auto" viewBox="0 0 20 20" fill="white">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            <div className='container lg:w-2/3 mx-auto mt-8'>
                                <h1 className='text-bold text-6xl text-primary font-black'>Build easy to join events</h1>
                                <p className='text-bold text-2xl text-primary-light my-8 mb-16'>
                                    Tetherer is a discord bot which lets you create widely customizable events to bring people together.
                                    With many integrations, features you can create your own events. You can set a meeting for colleagues or raid with your guild.
                                    Now add to your Discord server and start using.
                                </p>
                            </div>
                            <div className="container">
                                <button
                                    className={`text-primary w-72 font-semibold rounded focus:outline-none inline-flex shadow-xl`}
                                    style={{ backgroundColor: '#7289DA' }}
                                    onClick={handleLogin}
                                    type='submit'
                                >
                                    <div className="m-auto p-4">
                                        <img
                                            className="h-8 mr-4 inline-block"
                                            src='https://lithi.io/file/RVtD.svg'
                                            alt="logo"
                                        />
                                        <span className='text-xl'>Add to Server</span>
                                    </div>

                                </button>
                                <a
                                    className={`text-primary bg-content w-72 font-semibold rounded focus:outline-none inline-flex shadow-xl ml-4`}
                                    href='/documentation'
                                    type='submit'
                                >
                                    <div className="m-auto p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 mr-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="white">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span className='text-xl '>Documentation</span>
                                    </div>

                                </a>
                            </div>

                        </div>
                        {/* Stats Part */}
                        <div className='container rounded-xl pb-10 text-center flex'>
                            <div className='flex-grow text-4xl'>
                                <CountUp className='text-primary'
                                    formattingFn={(num) => (num < 1000) ? num : num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' : (num / 1000).toFixed(1) + 'K'}
                                    duration={4}
                                    start={0}
                                    end={273123555}
                                />
                                <p className='text-primary'>SERVERS</p>
                            </div>
                            <div className='flex-grow text-4xl'>
                                <CountUp className='text-primary'
                                    formattingFn={(num) => (num < 1000) ? num : num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' : (num / 1000).toFixed(1) + 'K'}
                                    duration={4}
                                    start={0}
                                    end={125999}
                                />
                                <p className='text-primary'>EVENTS</p>
                            </div>
                            <div className='flex-grow text-4xl'>
                                <CountUp className='text-primary'
                                    formattingFn={(num) => (num < 1000) ? num : num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' : (num / 1000).toFixed(1) + 'K'}
                                    duration={4}
                                    start={0}
                                    end={125999}
                                />
                                <p className='text-primary'>USERS</p>
                            </div>
                            <div className='flex-grow text-4xl'>
                                <CountUp className='text-primary'
                                    formattingFn={(num) => (num < 1000) ? num : num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' : (num / 1000).toFixed(1) + 'K'}
                                    duration={4}
                                    start={0}
                                    end={5588}
                                />
                                <p className='text-primary'>SIGN-UPS</p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide triggerOnce>
                        {/* Feature Part */}
                        <div className='container rounded-xl text-left flex gradient shadow-2xl mb-16'>
                            {/* Text */}
                            <div className='w-4/12 p-12 m-auto'>
                                <h2 className='text-primary text-2xl font-bold pb-4'>Pre-Prepared Templates</h2>
                                <p className='text-primary text-xl font-semibold'>You can select between many pre-prepared templates to create a new event! Fast and simple!</p>
                            </div>
                            <div className='w-8/12 p-4 mt-12'>
                                {/* Gif Place */}
                                <video className='rounded-xl' loop autoPlay muted playsInline>
                                    <source src={ExampleVideo} type="video/webm" />
                                </video>
                            </div>
                        </div>
                    </Slide>
                    <Zoom triggerOnce>
                        {/* Features Grid Part */}
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                            <div className='container rounded-2xl shadow-xl p-8 bg-home-grid'>
                                <img
                                    className="h-8 mb-4 inline-block"
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/320px-Zoom_Communications_Logo.svg.png'
                                    alt="zoom"
                                />
                                <img
                                    className="h-24 w-24 mx-auto my-8 shadow-xl"
                                    src='https://zoom.us/docs/ent/media-assets/img/desktop-logo-zoombrand.png'
                                    alt="zoom_logo"
                                />
                                <p className='font-semibold text-primary'>You can easly create zoom meetings with our events. All you need to do is activate zoom and after event occurs we will invite participants to meeting via direct message.</p>
                            </div>
                            <div className='container rounded-2xl shadow-xl p-8 bg-home-grid'>
                                <img
                                    className="h-11 mb-4 inline-block"
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png'
                                    alt="google"
                                />
                                <img
                                    className="h-24 w-24 mx-auto my-8 shadow-xl"
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/480px-Google_Calendar_icon_%282020%29.svg.png'
                                    alt="google_calendar"
                                />
                                <p className='font-semibold text-primary'>With our Google Calendar integration you can also automatically create a google calendar event with same properties. </p>
                            </div>
                            <div className='container rounded-2xl shadow-xl p-8 bg-home-grid'>
                                <h3 className='font-bold text-primary text-2xl pb-4'>Zoom</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto my-8" viewBox="0 0 20 20" fill="white">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <p className='font-semibold text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.</p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide direction='right' triggerOnce>
                        {/* Feature 2 Part */}
                        <div className='container rounded-xl flex gradient shadow-2xl my-16'>
                            {/* Text */}
                            <div className='w-8/12 p-4 mt-12'>
                                {/* Gif Place */}
                                <video className='rounded-xl' loop autoPlay muted playsInline>
                                    <source src={ExampleVideo} type="video/webm" />
                                </video>
                            </div>
                            <div className='w-4/12 p-12 m-auto'>
                                <h1 className='text-primary text-2xl font-bold pb-4'>One Click to Join</h1>
                                <p className='text-primary text-xl font-semibold'>If you want to join an event, all you need to do is click the reaction below and thats all!</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </main>
        </div>
    );
}
