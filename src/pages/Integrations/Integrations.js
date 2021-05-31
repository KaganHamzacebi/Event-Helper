import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet-async';
import { metaData } from '../../utils/MetaData';

export default function Integrations() {

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Integrations | Tetherer</title>
                <meta
                    name='description'
                    content='Integration page contains the data for our Tetherer integrations. You can easly use them with activating in create screen.'
                    data-react-helmet='true'
                />
                <meta name='keywords' content='Tetherer, Discord, event, integrations, zoom, google calendar' />
                <link rel="canonical" href={process.env.REACT_APP_WEB_URL + '/integrations'} />
                <script className='structured-data-list' type="application/ld+json">{metaData()}</script>
            </Helmet>
            <div id="header-wrapper">
                <Header />
            </div>
            <main className='flex'>
                <div className="container mx-auto px-6 2xl:px-40">
                    {/* Content Here */}
                    <h1>Integration</h1>
                </div>
            </main>
            <div id="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}