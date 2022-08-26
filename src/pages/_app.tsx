import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<Head>
				<title>Dominik Pilipczuk</title>
			</Head>
			<div className='flex flex-col min-h-screen justify-between'>
				<div className='flex flex-col items-center w-3/5 mx-auto'>
					<NavBar></NavBar>
					<Component {...pageProps} />
				</div>
				<Footer></Footer>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
