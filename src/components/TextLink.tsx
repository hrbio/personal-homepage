import Link from 'next/link';
import { FC } from 'react';

const TextLink: FC<{ to: string; children: string }> = ({ to, children }) => {
	return (
		<Link href={to}>
			<a className='text-neutral-500 border-dashed border-neutral-500 hover:text-neutral-400 hover:border-neutral-500 border-b'>
				{children}
			</a>
		</Link>
	);
};

export default TextLink;
