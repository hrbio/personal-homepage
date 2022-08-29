import Tooltip from '@/UI/Tooltip';
import { FC } from 'react';
import { contactMethod } from './ContactSection';

const ContactMethod: FC<{ contactMethod: contactMethod }> = ({
	contactMethod,
}) => {
	const { name, icon, link, username, clickable } = contactMethod;

	const content = clickable ? (
		<a
			href={link}
			target='_blank'
			rel="noreferrer"
			className='text-neutral-500 border-dashed border-neutral-500 hover:text-neutral-400 hover:border-neutral-500 border-b'
		>
			<span>{username}</span>
		</a>
	) : (
		<span>{username}</span>
	);

	return (
		<li className='flex flex-row items-center my-5 relative'>
			<Tooltip text={name}>
				<div className='aspect-square h-7 dark:fill-gray-300 fill-neutral-700 peer'>
					{icon}
				</div>
			</Tooltip>
			<div className='px-2'>{content}</div>
		</li>
	);
};

export default ContactMethod;
