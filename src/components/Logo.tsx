import { FC } from 'react';

const Logo: FC = () => {
	return (
		<div className='flex flex-col'>
			<h2 className='text-xl font-mono italic'>Cześć, nazwywam się</h2>
			<h1 className='font-logo text-7xl tracking-wide font-black'>
				Dominik Pilipczuk
			</h1>
		</div>
	);
};

export default Logo;
