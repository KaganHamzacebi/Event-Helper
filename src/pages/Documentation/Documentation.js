import { Helmet } from 'react-helmet-async';
import { metaData } from '../../utils/MetaData';

export default function Documentation() {

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Documentation | Event Helper</title>
                <meta
                    name='description'
                    content='Documentation page contains the usage of Tetherer and API. You can start with getting started part.'
                    data-react-helmet='true'
                />
                <meta name='keywords' content='Tetherer, Discord, event, documentation, getting started, installation, api' />
                <link rel="canonical" href={process.env.REACT_APP_WEB_URL + '/documentation'} />
                <script className='structured-data-list' type="application/ld+json">{metaData()}</script>
            </Helmet>
            <main>
                <div className="container mx-auto px-6 2xl:px-40">
                    {/* Content Here */}
                    <h1>Documentation</h1>
                </div>
            </main>
        </div>
    )
}