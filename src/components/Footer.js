export default function Footer() {
    return (
        <div className='w-full border-t border-gray-800 p-8' style={{ backgroundColor: '#1b1b1b' }}>
            <div className='flex text-center'>
                <div className='flex mx-auto gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 20 20" fill="white">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <h1 className='text-primary-light text-base'>Event Helper - All rights reserved</h1>
                </div>
                {/* TODO: SET HREF's */}
                <div className='flex m-auto'>
                    <a className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' href='/' >Status</a>
                    <a className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' href='/' >Twitter</a>
                    <a className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' href='/' >Contact Us</a>
                    <a className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' href='/' >Docs</a>
                    <a className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' href='/' >API</a>
                    <a className='text-primary-light transition-color text-base mx-4 duration-700 hover:text-white' href='/' >Terms of Service</a>
                </div>
            </div>
        </div>
    );
}