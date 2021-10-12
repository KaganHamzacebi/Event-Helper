import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Helmet} from "react-helmet-async";
import {CheckIcon} from "@heroicons/react/solid";

export default function Premium() {

    return (
        <div>
            <Helmet>
                <title>Guilds Panel | Tetherer</title>
                <meta name='robots' content='noindex'/>
            </Helmet>
            <div id="header-wrapper" className='sticky top-0 z-50 items-start'>
                <Header/>
            </div>
            <div className='w-full h-screen'>
                <main>
                    <div className='container mx-auto 2xl:px-40 px-6 py-8 lg:py-24'>
                        <h1 className='text-white font-extrabold text-2xl text-center uppercase pb-4'>Premium Plans</h1>
                        <p className="text-gray-400 text-center">Get premium to access next level features.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 mt-24 lg:px-20">
                            {/* Monthly Plan */}
                            <div
                                className="bg-gray-600 bg-opacity-30 font-bold text-xl rounded shadow px-8 lg:-mr-4 lg:ml-12 mb-8 lg:mb-20 lg:mt-8
                                lg:transition duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <div
                                    className="absolute h-8 px-4 rounded-xl -top-4 left-1/2 transform -translate-x-1/2 bg-dc_blue flex">
                                    <span className="m-auto text-base text-white uppercase">Cheapest</span>
                                </div>
                                <div className="divide-solid divide-gray-600 divide-opacity-50 divide-y">
                                    <div className="flex flex-col p-6">
                                        <span className="text-white mx-auto text-lg">Monthly Plan</span>
                                        <div className="mx-auto mt-2">
                                            <span className="text-gray-600 text-4xl">US</span>
                                            <span className="text-white ml-2 mr-2 text-4xl">3.50</span>
                                            <span className="text-gray-600 text-4xl">$</span>
                                        </div>
                                        <span
                                            className="mx-auto text-base text-gray-400 font-light mt-2">Billed every month</span>
                                    </div>
                                    <div className="flex flex-col py-6">
                                        <ul>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal mb-4">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Fully refundable for 7 days
                                            </span>
                                            </li>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Transferable to another server
                                            </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col p-6">
                                        <a href="/" className="border border-gray-600 h-12 w-full rounded shadow flex">
                                        <span
                                            className="m-auto text-white text-base font-normal">Get the Monthly plan</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Lifetime Plan */}
                            <div
                                className="bg-gray-800 font-bold text-xl rounded shadow-xl px-8 z-10 mb-8
                                transition duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <div
                                    className="absolute h-8 px-4 rounded-xl -top-4 left-1/2 transform -translate-x-1/2 bg-dc_green flex">
                                    <span className="m-auto text-base text-white uppercase">Best Deal</span>
                                </div>
                                <div className="divide-solid divide-gray-600 divide-opacity-50 divide-y">
                                    <div className="flex flex-col p-6">
                                        <span className="text-white mx-auto text-lg">Lifetime Plan</span>
                                        <div className="mx-auto mt-2">
                                            <span className="text-gray-600 text-4xl">US</span>
                                            <span className="text-white ml-2 mr-2 text-4xl">99.99</span>
                                            <span className="text-gray-600 text-4xl">$</span>
                                        </div>
                                        <span
                                            className="mx-auto text-base text-gray-400 font-light mt-2">Single payment</span>
                                    </div>
                                    <div className="flex flex-col py-6">
                                        <ul>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal mb-4">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Fully refundable for 7 days
                                            </span>
                                            </li>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal mb-4">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Fully refundable for 7 days
                                            </span>
                                            </li>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal mb-4">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Fully refundable for 7 days
                                            </span>
                                            </li>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Fully refundable for 7 days
                                            </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col p-6">
                                        <a href="/" className="border border-gray-600 h-12 w-full rounded shadow flex">
                                        <span
                                            className="m-auto text-white text-base font-normal">Get the Lifetime plan</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Yearly Plan */}
                            <div
                                className="bg-gray-600 bg-opacity-30 font-bold text-xl rounded shadow px-8 lg:-ml-4 lg:mr-12 mb-8 lg:mb-20 lg:mt-8
                                transition duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <div
                                    className="absolute h-8 px-4 rounded-xl -top-4 left-1/2 transform -translate-x-1/2 bg-dc_fuchsia flex">
                                    <span className="m-auto text-base text-white uppercase">65% OFF</span>
                                </div>
                                <div className="divide-solid divide-gray-600 divide-opacity-50 divide-y">
                                    <div className="flex flex-col p-6">
                                        <span className="text-white mx-auto text-lg">Yearly Plan</span>
                                        <div className="mx-auto mt-2">
                                            <span className="text-gray-600 text-4xl">US</span>
                                            <span className="text-white ml-2 mr-2 text-4xl">35.99</span>
                                            <span className="text-gray-600 text-4xl">$</span>
                                        </div>
                                        <span
                                            className="mx-auto text-base text-gray-400 font-light mt-2">Billed every year</span>
                                    </div>
                                    <div className="flex flex-col py-6">
                                        <ul>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal mb-4">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Fully refundable for 7 days
                                            </span>
                                            </li>
                                            <li>
                                            <span className="flex text-gray-300 text-sm font-normal">
                                                <CheckIcon className="text-green-700 w-5 mr-1"/>Transferable to another server
                                            </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col p-6">
                                        <a href="/" className="border border-gray-600 h-12 w-full rounded shadow flex">
                                        <span
                                            className="m-auto text-white text-base font-normal">Get the Yearly plan</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Premium Features */}
                        <h1 className='text-white font-extrabold text-2xl text-left uppercase pb-4 mt-16 lg:mt-48'>Premium
                            Features</h1>
                        <div className="mt-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="px-12 py-6 bg-content rounded shadow-xl">
                                    <div>
                                        <ul>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="px-12 py-6 bg-content rounded shadow-xl">
                                    <div>
                                        <ul>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                            <li>
                                    <span className="flex text-gray-300 text-lg font-bold mb-4">
                                        <CheckIcon className="text-green-700 w-8 mr-1"/>Fully refundable for 7 days
                                    </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
                <div id="footer-wrapper">
                    <Footer/>
                </div>
            </div>
        </div>


    )
}