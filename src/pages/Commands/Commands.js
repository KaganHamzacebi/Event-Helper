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
                    content=''
                    data-react-helmet='true'
                />
                <meta name='keywords' content='Event, Discord, Raid, Meeting, Bot, WOW, World of Warcraft, Yes & No, Yes No, one click, Documentation' />
                <link rel="canonical" href={process.env.REACT_APP_WEB_URL + '/commands'} />
                <script className='structured-data-list' type="application/ld+json">{metaData()}</script>
            </Helmet>
            <main>
                <div className="container mx-auto px-6 2xl:px-40">
                    {/* Content Here */}
                </div>
            </main>
        </div>
    )
}