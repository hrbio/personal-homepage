import { FC } from 'react';

const TextSection: FC<{
	title: string;
	children: JSX.Element | JSX.Element[];
}> = ({ title, children }) => {
	return (
		<section className='w-full bg-sky-100 dark:bg-stone-800 rounded-md drop-shadow-md my-16 py-8 px-12'>
			<h2 className='font-black font-logo text-3xl'>{title}</h2>
			<div className='text-lg indent-4 text-justify'>{children}</div>
		</section>
	);
};

export default TextSection;
