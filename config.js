// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Álvaro',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'e5bbf412486507276c532d613f9d94f0', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '40.585020',
	defaultLongitude: '-3.985390',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'iCloud',
			icon: 'cloud',
			link: 'https://beta.icloud.com/',
		},
		{
			id: '4',
			name: 'ChatGPT',
			icon: 'message-circle',
			link: 'https://chat.openai.com/chat',
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '6',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://www.amazon.es/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'Aulaglobal',
					link: 'https://login.uc3m.es/index.php/CAS/login?service=https%3A%2F%2Faulaglobal.uc3m.es%2Flogin%2Findex.php',
				},
				{
					name: 'Drive UNI',
					link: 'https://drive.google.com/drive/u/1/my-drive',
				},
				{
					name: 'Docs',
					link: 'https://docs.google.com/document/u/1/?hl=es',
				},
				{
					name: 'Music',
					link: 'https://youtu.be/9wlpIW-JIec',
				},
			],
		},
		{
			icon: 'download',
			id: '2',
			links: [
				{
					name: 'General',
					link: 'http://rarbgprx.org/index80.php',
				},
				{
					name: 'Anime',
					link: 'https://nyaa.si/',
				},
				{
					name: 'Trackers',
					link: 'https://newtrackon.com/list',
				},
				{
					name: 'Megathread',
					link: 'https://www.reddit.com/r/Piracy/wiki/megathread/#wiki_megathread',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'message-circle',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Twitter',
					link: 'https://twitter.com/home',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com/',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
			],
		},
		{
			icon: 'piggy-bank',
			id: '2',
			links: [
				{
					name: 'Amazon',
					link: 'https://www.amazon.es/',
				},
				{
					name: 'Prolific',
					link: 'https://app.prolific.co/studies',
				},
				{
					name: 'Caixabank Now',
					link: 'https://loc9.caixabank.es/GPeticiones?PN=LGN&PE=8&CANAL=I&DEMO=0&FLAG_BORSA=0&IDIOMA=02&REF_STC=tPSHwXdAe_KL3tonefu7OmXNd9RVpV77fDiDdRQcAl8aMgWAjyQQaQ',
				},
				{
					name: 'Aliexpress',
					link: 'https://es.aliexpress.com/?gatewayAdapt=glo2esp',
				},
			],
		},
	],
};
