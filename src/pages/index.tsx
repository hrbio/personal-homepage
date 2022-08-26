import HomeSection from '@/components/HomeSection';
import Logo from '@/components/Logo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<Logo></Logo>
			<HomeSection></HomeSection>
		</>
	);
};

export default Home;
