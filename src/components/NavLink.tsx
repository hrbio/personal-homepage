import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NavLink:FC<{ to: string; title:string}> = ({to ,title }) => {
	const router = useRouter()

	return (
		<Link href={to}>
			<a
				className={`${
					router.pathname === to ? 'text-white drop-shadow-xl' : 'text-neutral-300 drop-shadow-lg'
				} hover:text-white hover:drop-shadow-xl`}
			>
				{title}
			</a>
		</Link>
	);
};

export default NavLink;
