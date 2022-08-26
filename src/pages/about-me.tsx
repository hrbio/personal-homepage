import type { NextPage } from 'next';
import { useTheme } from 'next-themes';

const AboutMe: NextPage = () => {
	const { theme, setTheme } = useTheme();
	return <h1>About Me</h1>;
};

export default AboutMe;
