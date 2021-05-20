export default function Page404() {
    return (
        <div className='w-full'>
            <main>
                <div className="container p-24 2xl:px-80 flex mx-auto">
                    <div className='flex-grow-0 m-auto'>
                        <a href='/' className='text-6xl text-primary font-extrabold flex-grow-0 cursor-pointer'>Event Helper</a>
                        <h1 className='text-4xl text-red-700 font-extrabold flex-grow-0 pt-8'>Page Not Found</h1>
                        <span className='text-primary-light pt-2'>The requested URL {window.location.pathname} was not found on this server. That’s all we know.</span>
                    </div>
                </div>
            </main>
        </div>
    )
}