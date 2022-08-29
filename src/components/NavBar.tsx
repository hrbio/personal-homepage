import { FC, useEffect, useState } from 'react';
import ActionButton from '@/UI/ActionButton';
import {
	CodeBracketIcon,
	MoonIcon,
	SunIcon,
} from '@heroicons/react/24/outline';
import NavLink from './NavLink';
import { useTheme } from 'next-themes';
import Tooltip from '@/UI/Tooltip';

const NavBar: FC = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='flex flex-row justify-between uppercase text-lg font-bold py-16 w-full'>
			<NavLink to='/' title='Strona główna'></NavLink>
			<NavLink to='/about-me' title='O Mnie'></NavLink>
			<NavLink to='/my-works' title='Moje Prace'></NavLink>
			<NavLink to='/contact' title='Kontakt'></NavLink>
			<div className='flex flex-row justify-between w-24 normal-case'>
				<a
					href='https://github.com/hrbio/personal-homepage'
					target='_blank'
					rel='noreferrer'
				>
					<Tooltip text='Source code'>
						<CodeBracketIcon className='w-7'></CodeBracketIcon>
					</Tooltip>
				</a>
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
					<Tooltip
						text={theme === 'dark' ? 'Light mode' : 'Dark mode'}
					>
						<div className='group-hover:scale-125 transition-all'>
							{theme === 'dark' ? (
								<SunIcon className='w-7'></SunIcon>
							) : (
								<MoonIcon className='w-7'></MoonIcon>
							)}
						</div>
					</Tooltip>
				</ActionButton>
			</div>
		</div>
	);
};

export default NavBar;
