import { FC } from 'react';
import ActionButton from '@/UI/ActionButton';
import {
	MoonIcon,
	SunIcon,
} from '@heroicons/react/24/outline';
import NavLink from './NavLink';
import { useTheme } from 'next-themes';

const NavBar: FC = () => {
	const { theme, setTheme } = useTheme();

	const isDarkTheme = theme === 'dark';

	return (
		<div className='flex flex-row justify-between uppercase text-lg font-bold py-16 w-full'>
			<NavLink to='/' title='Strona główna'></NavLink>
			<NavLink to='/about-me' title='O Mnie'></NavLink>
			<NavLink to='/my-works' title='Moje Prace'></NavLink>
			<NavLink to='/contact' title='Kontakt'></NavLink>
			<ActionButton
				onClickHandler={
					theme === 'dark'
						? () => {
								setTheme('light');
						  }
						: () => {
								setTheme('dark');
						  }
				}
			>
				{isDarkTheme ? (
					<SunIcon className='w-7'></SunIcon>
				) : (
					<MoonIcon className='w-7'></MoonIcon>
				)}
			</ActionButton>
		</div>
	);
};

export default NavBar;
