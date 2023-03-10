import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation', 'components/sidebar', 'pages/about', 'pages/main'];
const supportedLngs = ['en', 'ru'];

const resources = ns.reduce((acc, n) => {
	supportedLngs.forEach((lng) => {
		if (!acc[lng]) acc[lng] = {};
		acc[lng] = {
			...acc[lng],
			[n]: n.includes('/')
				?
				require(`../../public/locales/${lng}/${n.split('/')[0]}/${n.split('/')[1]}.json`)
				:
				require(`../../public/locales/${lng}/${n}.json`),
		};
	});
	return acc;
}, {});

// require(`../../public/locales/${lng}/${n}.json`)

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		lng: 'ru',
		fallbackLng: 'ru',
		defaultNS: 'translation',
		ns,
		interpolation: {escapeValue: false},
		react: {useSuspense: false},
		supportedLngs,
		resources,
	});

export default i18n;
