import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<Head><title>Dominik Pilipczuk</title></Head>
			<div className='flex flex-col h-screen w-screen items-center'>
				<NavBar></NavBar>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
