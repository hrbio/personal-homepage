import { FC } from 'react';

const Logo: FC = () => {
	return (
		<div className='flex flex-col'>
			<h2 className='text-xl font-greeting'>Hi, my name is</h2>
			<h1 className='font-logo text-7xl tracking-wide font-black'>Dominik Pilipczuk</h1>
		</div>
	);
};

export default Logo;
