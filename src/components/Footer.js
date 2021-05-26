import { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

export default function Footer() {

    const history = useHistory();
    const { language, setLanguage } = useContext(UserContext);

    return (
        <div className='w-full border-t border-gray-700'>
            <div className='container p-6 2xl:px-40 grid grid-cols-1 lg:flex mx-auto' style={{ backgroundColor: '#1b1b1b' }}>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-8 my-auto -ml-2" viewBox="0 0 20 20" fill="white">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <h1 className='text-primary-light text-xl ml-2 my-auto'>Tetherer</h1>
                    <div className='flex flex-grow'></div>
                    <select defaultValue={language} onChange={(e) => setLanguage(e.target.value)} className='ml-8 border border-gray-900 rounded pr-8 outline-none bg-title text-primary-light placeholder-opacity-30  transition duration-800 focus:ring-2 focus:ring-blue-600'>
                        <option value="en" className='text-primary rounded-full'>English</option>
                        <option value="tr" className='text-primary'>Turkish</option>
                    </select>
                </div>
                <div className='flex flex-grow'></div>
                {/* TODO: SET HISTORIES */}
                <div className='grid lg:flex grid-cols-1 justify-items-start mt-4 lg:mt-0 lg:m-auto'>
                    <button className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' onClick={() => history.push('/')}>Status</button>
                    <button className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' onClick={() => history.push('/')}>Twitter</button>
                    <button className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' onClick={() => history.push('/')}>Contact Us</button>
                    <button className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' onClick={() => history.push('/')}>Docs</button>
                    <button className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' onClick={() => history.push('/')}>API</button>
                    <button className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' onClick={() => history.push('/')}>Terms of Service</button>
                </div>
            </div>
        </div>
    );
}
