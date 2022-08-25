import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '@/components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='flex flex-col h-screen w-screen items-center'>

			<NavBar></NavBar>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
