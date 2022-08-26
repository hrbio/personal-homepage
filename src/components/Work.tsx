import { work } from '@/data/works';
import Image from 'next/image';
import { FC } from 'react';
import Technology from './Technology';

const Work: FC<{ work: work }> = ({ work }) => {
	return (
		<div className='w-auto aspect-square bg-red-400 m-5 rounded-2xl overflow-hidden drop-shadow-2xl'>
			<div className='relative h-36'>
				<Image
					src={work.photo}
					layout='fill'
					objectFit='cover'
				></Image>
			</div>
			<div className='bg-gray-100 w-full h-full drop-shadow-sm rounded-t-md shadow-[0_0_41px_rgba(66,68,90,1)] -translate-y-4 p-5 '>
				<h1 className='font-bold text-center'>{work.title}</h1>
				<p className='bg-sky-100 p-1 rounded-md drop-shadow'>{work.description}</p>
			<div>
				{work.technologies.map(e => <Technology tech={e}></Technology>)}
			</div>
			</div>
		</div>
	);
};

export default Work;
