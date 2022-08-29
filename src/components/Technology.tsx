import { tech } from '@/data/works';
import Image from 'next/image';
import { FC } from 'react';

const Technology: FC<{ tech: tech }> = ({ tech }) => {
	return (
		<div className='relative aspect-square w-10 mr-5'>
			<div className='peer'>
				<Image src={tech.icon} layout='fill'></Image>
			</div>
			<span className='absolute left-[125%] top-1/2 -translate-y-1/2 scale-0 peer-hover:scale-100 transition-all z-10 dark:bg-stone-800 bg-sky-200 px-2 py-1 rounded-lg font-bold'>
				{tech.name}
			</span>
		</div>
	);
};

export default Technology;
