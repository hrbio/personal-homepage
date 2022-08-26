import Link from 'next/link';
import TextLink from './TextLink';
import TextSection from '@/UI/TextSection';

const HomeSection = () => {
	return (
		<TextSection title='TL;DR'>
			<p>
				Cześć, nazywam się Dominik Pilipczuk. Jestem studentem 2-go roku
				AGH w Krakowie na kierunku Informatyka. Więcej dowiesz się w
				sekcji <TextLink to='about-me'>o mnie</TextLink>. Jeżeli chcesz
				zobaczyć moje prace, udaj się do {' '}
				<TextLink to='my-works'>moje prace</TextLink>.
				E-mail, github czy inne formy kontaktu ze mną znajdziesz w <TextLink to='contact'>kontakt</TextLink>.
			</p>
			<p className='pt-6 indent-0'>Dominik</p>
		</TextSection>
	);
};

export default HomeSection;
