
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet-async';
import { useHistory, Link } from 'react-router-dom';

export default function Page404() {
    const history = useHistory();

    return (
        <div className='w-full flex flex-col flex-grow'>
            <Helmet>
                <title>Page Not Found!</title>
                <meta name='robots' content='noindex' />
            </Helmet>
            <div id="header-wrapper">
                <Header />
            </div>
            <main className='flex-grow'>
                <div className="container p-12 lg:p-24 2xl:px-80 flex h-3/4 m-auto">
                    <div className='m-auto'>
                        <Link to='/' className='text-6xl text-primary font-extrabold flex-grow-0 cursor-pointer m-auto'>Tetherer</Link>
                        <h1 className='text-4xl text-red-700 font-extrabold flex-grow-0 pt-8'>Page Not Found</h1>
                        <span className='text-primary-light pt-2'>The requested URL {window.location.pathname} was not found on this server. That’s all we know.</span>
                    </div>
                </div>
            </main>
            <div id="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}