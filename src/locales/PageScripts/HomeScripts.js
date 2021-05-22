export function HomeScripts(value, lang) {

    const scripts = {
        metaTitle: {
            'en': 'Home | Tetherer',
            'tr': 'Anasayfa | Tetherer',
        },
        metaDescription: {
            'en': 'Tetherer is a discord bot which lets you create widely customizable events to bring people together. Tetherer offers you various options and strong integrations.',
            'tr': '',
        },
        metaKeywords: {
            'en': 'Tetherer, Discord, event, events, options, integrations, zoom, google, calendar, raid, guild, meeting, fast, simple',
            'tr': '',
        },
        firstLookHeader: {
            'en': 'Build easy to join events',
            'ty': '',
        },
        firstLookParagraph: {
            'en': 'Tetherer is a discord bot which lets you create widely customizable events to bring people together. With many integrations, features you can create your own events. You can set a meeting for colleagues or raid with your guild.Now add to your Discord server and start using.',
            'tr': '',
        },
        addToServerButton: {
            'en': 'Add to Server',
            'tr': '',
        },
        documentationButton: {
            'en': 'Documentation',
            'tr': '',
        },
        statsServers: {
            'en': 'SERVERS',
            'tr': '',
        },
        statsEvents: {
            'en': 'EVENTS',
            'tr': '',
        },
        statsUsers: {
            'en': 'USERS',
            'tr': '',
        },
        statsSignups: {
            'en': 'SIGN-UPS',
            'tr': '',
        },
        firstFeatureHeader: {
            'en': 'Pre-Prepared Templates',
            'tr': '',
        },
        firstFeatureParagraph: {
            'en': 'You can select between many pre-prepared templates to create a new event! Fast and simple!',
            'tr': '',
        },
        firstFeatureGridParagraph: {
            'en': 'You can easly create zoom meetings with our events. All you need to do is activate zoom and after event occurs we will invite participants to meeting via direct message.',
            'tr': '',
        },
        secondFeatureGridParagraph: {
            'en': 'With our Google Calendar integration you can also automatically create a google calendar event with same properties.',
            'tr': '',
        },
        thirdFeatureGridParagraph: {
            'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.',
            'tr': '',
        },
        secondFeatureHeader: {
            'en': 'One Click to Join',
            'tr': '',
        },
        secondFeatureParagraph: {
            'en': 'If you want to join an event, all you need to do is click the reaction below and thats all!',
            'tr': '',
        }
    }

    const content = scripts[value];
    if (!content) return 'VALUE NOT FOUND!';
    const scriptValue = content[lang];
    if (!scriptValue) return 'LANG NOT FOUND!';

    return scriptValue;
}