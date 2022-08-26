import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/assets/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/assets/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/assets/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/assets/favicon/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/assets/favicon/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<link rel='shortcut icon' href='/assets/favicon/favicon.ico' />
				<meta name='msapplication-TileColor' content='#00aba9' />
				<meta
					name='msapplication-config'
					content='/assets/favicon/browserconfig.xml'
				/>
				<meta name='theme-color' content='#ffffff' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,900&family=Lato:wght@300;400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
