import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '@/components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
	console.log('es')
	return (
		<div className='flex flex-col h-screen w-screen items-center'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,900&family=Lato:wght@300;400;700&display=swap'
					rel='stylesheet'
				/>

				<title>Dominik Pilipczuk</title>
			</Head>
			<NavBar></NavBar>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
