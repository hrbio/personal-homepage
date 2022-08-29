import TextSection from '@/UI/TextSection';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';

const AboutMe: NextPage = () => {
	return (
		<TextSection title='O mnie'>
			<p>
				Studiuję informatykę na AGH-u, konkretniej na wydziale
				Informatyki, Elektroniki i Telekomunikacji. Chcę rozpocząć swoją
				przygodę z zawodem programisty. Wcześniej pracowałem w biurze
				controllingu. Moje CV znajdziesz na <a href='https://google.com' target='_blank' rel="noreferrer" className='text-neutral-500 border-dashed border-neutral-500 hover:text-neutral-400 hover:border-neutral-500 border-b'>githubie</a>.
			</p>
		</TextSection>
	);
};

export default AboutMe;
