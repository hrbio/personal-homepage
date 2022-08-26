import { FC } from 'react';
import ActionButton from './ActionButton';
import { GlobeEuropeAfricaIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import NavLink from './NavLink';
import { useTheme } from 'next-themes';

const NavBar: FC = () => {
	const {theme, setTheme} = useTheme();

	const isDarkTheme = theme === 'dark';

	return (
		<div className='flex flex-row justify-evenly uppercase text-lg font-bold py-16 w-full'>
			<NavLink to='/' title='Home'></NavLink>
			<NavLink to='/about-me' title='About Me'></NavLink>
			<NavLink to='/my-works' title='My works'></NavLink>
			<NavLink to='/contact' title='Contact'></NavLink>
			<div className='flex flex-row justify-between w-24'>
				<ActionButton onClickHandler={() => {}}>
					<GlobeEuropeAfricaIcon className='w-7'></GlobeEuropeAfricaIcon>
				</ActionButton>
				<ActionButton onClickHandler={theme==='dark' ? () => {setTheme('light')} : () => {setTheme('dark')}}>
					{isDarkTheme ? <SunIcon className='w-7'></SunIcon> : <MoonIcon className='w-7'></MoonIcon>}
				</ActionButton>
			</div>
		</div>
	);
};

export default NavBar;
