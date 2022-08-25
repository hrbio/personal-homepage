import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import ActionButton from './ActionButton';
import { GlobeEuropeAfricaIcon, SunIcon } from '@heroicons/react/24/outline';
import NavLink from './NavLink';

const NavBar: FC = () => {
	const router = useRouter();

	return (
		<div className='flex flex-row justify-evenly uppercase text-lg font-bold w-4/5 pt-16'>
			<NavLink to='/' title='Home'></NavLink>
			<NavLink to='/about-me' title='About Me'></NavLink>
			<NavLink to='/my-works' title='My works'></NavLink>
			<NavLink to='/contact' title='Contact'></NavLink>
			<div className='flex flex-row justify-between w-24'>
				<ActionButton onClickHandler={() => {}}>
					<GlobeEuropeAfricaIcon className='w-7'></GlobeEuropeAfricaIcon>
				</ActionButton>
				<ActionButton onClickHandler={() => {}}>
					<SunIcon className='w-7'></SunIcon>
				</ActionButton>
			</div>
		</div>
	);
};

export default NavBar;
