export function HomeScripts(value, lang) {

    const scripts = {
        metaTitle: {
            'en': 'Home | Tetherer',
            'tr': 'Anasayfa | Tetherer',
        },
        metaDescription: {
            'en': 'Tetherer is a discord bot which lets you create widely customizable events to bring people together. Tetherer offers you various options and strong integrations.',
            'tr': 'Tetherer insanları bir araya toplamayı amaçlayam özelleştirilebilir bir discord etkinlik botudur. Tetherer size çeşitli özelleştirmeler ve entegrasyonları ile rahat bir kullanım sunar.',
        },
        metaKeywords: {
            'en': 'Tetherer, Discord, event, events, options, integrations, zoom, google, calendar, raid, guild, meeting, fast, simple',
            'tr': 'Tetherer, Discord, etkinlik, etkinlikler, özellik, entegrasyon, zoom, google, takvim, raid, guild, toplantı, hızlı, basit',
        },
        firstLookHeader: {
            'en': 'Build easy to join events',
            'ty': 'Kolay oluşturulabilir etkinlikler',
        },
        firstLookParagraph: {
            'en': 'Tetherer is a discord bot which lets you create widely customizable events to bring people together. With many integrations, features you can create your own events. You can set a meeting for colleagues or raid with your guild.Now add to your Discord server and start using.',
            'tr': '',
        },
        addToServerButton: {
            'en': 'Add to Server',
            'tr': 'Sunucuya Ekle',
        },
        documentationButton: {
            'en': 'Documentation',
            'tr': 'Dökümentasyon',
        },
        statsServers: {
            'en': 'SERVERS',
            'tr': 'SUNUCULAR',
        },
        statsEvents: {
            'en': 'EVENTS',
            'tr': 'ETKİNLİKLER',
        },
        statsUsers: {
            'en': 'USERS',
            'tr': 'KULLANICILAR',
        },
        statsSignups: {
            'en': 'SIGN-UPS',
            'tr': 'KATILIMCILAR',
        },
        firstFeatureHeader: {
            'en': 'Pre-Prepared Templates',
            'tr': 'Önceden Hazırlanmış Taslaklar',
        },
        firstFeatureParagraph: {
            'en': 'You can select between many pre-prepared templates to create a new event! Fast and simple!',
            'tr': 'Birçok hazır taslak arasından seçip etkinlik oluşturabilirsiniz. Hızlı ve basit!',
        },
        firstFeatureGridParagraph: {
            'en': 'You can easly create zoom meetings with our events. All you need to do is activate zoom and after event occurs we will invite participants to meeting via direct message.',
            'tr': 'Etkinlikler ile birlikte kolayca zoom toplantısı oluşturabilirsiniz. Tek yapmanız gereken zoom\'u aktif etmek ve etkinlik gerçekletiği zaman biz katılımcıları davet edeceğiz.',
        },
        secondFeatureGridParagraph: {
            'en': 'With our Google Calendar integration you can also automatically create a google calendar event with same properties.',
            'tr': 'Google Takvim entegrasyonumuz ile oluşturduğunuz etkinlikleri anında Google Takvim\'e de aktarabilirsiniz.',
        },
        thirdFeatureGridParagraph: {
            'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.',
            'tr': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lectus augue. Morbi pellentesque erat sed justo efficitur, a vestibulum mauris aliquam. Praesent sagittis odio ex, nec aliquet ipsum blandit.',
        },
        secondFeatureHeader: {
            'en': 'One Click to Join',
            'tr': 'Tek Tık ile Katılım',
        },
        secondFeatureParagraph: {
            'en': 'If you want to join an event, all you need to do is click the reaction below and thats all!',
            'tr': 'Eğer bir ektinliğe katılmak istiyorsanız tek yapmanız gereken etkinliğin altında bulunan reaksiyona tıklamak.',
        }
    }

    const content = scripts[value];
    if (!content) return 'VALUE NOT FOUND!';
    const scriptValue = content[lang];
    if (!scriptValue) return 'LANG NOT FOUND!';

    return scriptValue;
}