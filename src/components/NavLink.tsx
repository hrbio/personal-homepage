import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NavLink:FC<{ to: string; title:string}> = ({to ,title }) => {
	const router = useRouter()

	return (
		<Link href={to}>
			<a
				className={`${
					router.pathname === to ? 'drop-shadow-xl scale-105' : 'dark:text-neutral-300 drop-shadow-lg'
				} hover:drop-shadow-xl hover:scale-105 transition-transform`}
			>
				{title}
			</a>
		</Link>
	);
};

export default NavLink;
