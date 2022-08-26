import { FC } from 'react';

const Tooltip: FC<{ text: string; children: JSX.Element | JSX.Element[] }> = ({
	text,
	children,
}) => {
	return (
		<div className='group relative '>
			<span className='absolute w-max left-1/2 -translate-x-1/2 top-12 bg-sky-200 dark:bg-stone-700 px-2 py-1 rounded-lg drop-shadow scale-0 group-hover:scale-100 transition-all'>
				{text}
			</span>
			{children}
		</div>
	);
};

export default Tooltip;
