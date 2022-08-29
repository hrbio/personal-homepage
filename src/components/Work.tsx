import { work } from '@/data/works';
import Image from 'next/image';
import { FC } from 'react';
import Technology from './Technology';

const Work: FC<{ work: work }> = ({ work }) => {
	return (
		<div className='flex flex-col w-auto aspect-square m-5 rounded-2xl overflow-hidden drop-shadow-2xl hover:-translate-y-1 hover:shadow-[0_4px_0_0_#ede9fe] dark:hover:shadow-[0_4px_0_0_#57534e] transition-all'>
			<div className='relative h-36'>
				<Image
					src={work.photo}
					layout='fill'
					objectFit='cover'
				></Image>
			</div>
			<div className='dark:bg-stone-700 bg-gray-100 w-full drop-shadow-sm rounded-t-md shadow-[5px_0_69px_0_rgba(66,68,90,1)] px-5 py-4 self-end'>
				<h1 className='font-bold text-center mb-3'>{work.title}</h1>
				<p className='dark:bg-stone-800 bg-sky-200 px-4 py-2 rounded-md drop-shadow'>{work.description}</p>
			<div className='flex flex-row my-4'>
				{work.technologies.map(e => <Technology key={e.name} tech={e}></Technology>)}
			</div>
			</div>
		</div>
	);
};

export default Work;
