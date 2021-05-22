export function HeaderScripts(value, lang) {

    const scripts = {
        integrations: {
            'en': 'Integrations',
            'tr': 'Entegrasyonlar',
        },
        features: {
            'en': 'Features',
            'tr': 'Özellikler',
        },
        documentation: {
            'en': 'Documentation',
            'tr': 'Dökümentasyon',
        },
        commands: {
            'en': 'Commands',
            'tr': 'Komutlar',
        },
        login_button: {
            'en': 'Login Here',
            'tr': 'Giriş Yap',
        },
    }

    const content = scripts[value];
    if (!content) return 'VALUE NOT FOUND!';
    const scriptValue = content[lang];
    if (!scriptValue) return 'LANG NOT FOUND!';

    return scriptValue;
}