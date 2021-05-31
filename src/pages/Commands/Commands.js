import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet-async';
import { metaData } from '../../utils/MetaData';

export default function Commands() {

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Commands | Tetherer</title>
                <meta
                    name='description'
                    content='Commands page shows you all the commands you can use in your discord channel. After clicking a command you can see detailed usage.'
                    data-react-helmet='true'
                />
                <meta name='keywords' content='Tetherer, Discord, event, commands, create, edit, remove, add, cancel' />
                <link rel="canonical" href={process.env.REACT_APP_WEB_URL + '/commands'} />
                <script className='structured-data-list' type="application/ld+json">{metaData()}</script>
            </Helmet>
            <div id="header-wrapper">
                <Header />
            </div>
            <main>
                <div className="container mx-auto px-6 2xl:px-40">
                    {/* Content Here */}
                    <h1>Commands</h1>
                </div>
            </main>
            <div id="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}