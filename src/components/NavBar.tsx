import { FC, useEffect, useState } from 'react';
import ActionButton from '@/UI/ActionButton';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import NavLink from './NavLink';
import { useTheme } from 'next-themes';
import Tooltip from '@/UI/Tooltip';

const NavBar: FC = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {setMounted(true)}, [])

	if (!mounted) return null

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
				<Tooltip text={theme === 'dark' ? 'Light mode' : 'Dark mode'}>{ theme === 'dark' ? <SunIcon className='w-7'></SunIcon> : <MoonIcon className='w-7'></MoonIcon>}</Tooltip>
			</ActionButton>
		</div>
	);
};

export default NavBar;
