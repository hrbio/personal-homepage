import WORKS from '@/data/works';
import Work from './Work';

const WorksSection = () => {
	return (
		<section className='w-full bg-sky-100 dark:bg-stone-800 rounded-md drop-shadow-md my-16 py-8 px-12'>
			<h2 className='font-black font-logo text-3xl'>Moje prace</h2>
			<div className='grid grid-cols-3'>
				{WORKS.map((e) => (
					<Work key={e.id} work={e}></Work>
				))}
			</div>
		</section>
	);
};

export default WorksSection;
