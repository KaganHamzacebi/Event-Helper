import './Home.css';
import CountUp from 'react-countup';
import ExampleVideo from '../../assets/example.webm'
import { Zoom, Slide } from "react-awesome-reveal";

export default function Home() {

    return (
        <div className='w-full'>
            <main>
                <div className="container mx-auto py-6 px-6 2xl:px-40">
                    <Zoom triggerOnce>
                        {/* First Look Part */}
                        <div className='w-full pb-16 text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 mx-auto mt-24" viewBox="0 0 20 20" fill="white">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            <div className='w-1/2 mx-auto mt-8'>
                                <h1 className='text-bold text-6xl text-primary mt-16 font-black'>Event Helper</h1>
                                <p className='text-bold text-2xl text-primary-light my-8 mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales est vitae tristique pellentesque. Suspendisse dictum turpis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.</p>
                            </div>
                        </div>
                        {/* Stats Part */}
                        <div className='w-full rounded-xl pb-10 text-center flex'>
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
                        <div className='w-full rounded-xl text-left flex gradient shadow-2xl mb-16'>
                            {/* Text */}
                            <div className='w-4/12 p-12 m-auto'>
                                <h1 className='text-primary text-2xl font-bold pb-4'>Title</h1>
                                <p className='text-primary text-xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium dictum accumsan. Pellentesque tristique eros.</p>
                            </div>
                            <div className='w-8/12 p-4 mt-12'>
                                {/* Gif Place */}
                                <video className='rounded-xl w-full h-full' loop autoPlay muted playsInline>
                                    <source src={ExampleVideo} type="video/webm" />
                                </video>
                            </div>
                        </div>
                    </Slide>
                    <Zoom triggerOnce>
                        {/* Features Grid Part */}
                        <div className='w-full grid grid-cols-3 gap-4'>
                            <div className='rounded-2xl shadow-xl p-8 bg-home-grid'>
                                <h1 className='font-bold text-primary text-2xl pb-4'>Feature</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto my-8" viewBox="0 0 20 20" fill="white">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <span className='font-semibold text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.</span>
                            </div>
                            <div className='rounded-2xl shadow-xl p-8 bg-home-grid'>
                                <h1 className='font-bold text-primary text-2xl pb-4'>Feature</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto my-8" viewBox="0 0 20 20" fill="white">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <span className='font-semibold text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.</span>
                            </div>
                            <div className='rounded-2xl shadow-xl p-8 bg-home-grid'>
                                <h1 className='font-bold text-primary text-2xl pb-4'>Feature</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto my-8" viewBox="0 0 20 20" fill="white">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <span className='font-semibold text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.</span>
                            </div>
                        </div>
                    </Zoom>
                    <Slide direction='right' triggerOnce>
                        {/* Feature 2 Part */}
                        <div className='w-full rounded-xl flex gradient shadow-2xl my-16'>
                            {/* Text */}
                            <div className='w-8/12 p-4 mt-12'>
                                {/* Gif Place */}
                                <video className='rounded-xl w-full h-full' loop autoPlay muted playsInline>
                                    <source src={ExampleVideo} type="video/webm" />
                                </video>
                            </div>
                            <div className='w-4/12 p-12 m-auto'>
                                <h1 className='text-primary text-2xl font-bold pb-4'>Title</h1>
                                <p className='text-primary text-xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium dictum accumsan. Pellentesque tristique eros.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </main>
        </div>
    );
}
