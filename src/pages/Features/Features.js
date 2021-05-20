import { Helmet } from 'react-helmet-async';
import { metaData } from '../../utils/MetaData';

export default function Features() {

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Features / Event Helper</title>
                <meta
                    name='description'
                    content='Home page for Event Helper application. Event Helper is a discord bot which lets you create fully customizable repeatable events with companies and gamers. You can also set reminders and many other customization.'
                    data-react-helmet='true'
                />
                <meta name='keywords' content='Event, Discord, Raid, Meeting, Bot, WOW, World of Warcraft, Yes & No, Yes No, one click, Features' />
                <link rel="canonical" href="http://localhost:3000/" />
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