import { FC } from 'react';

const ActionButton: FC<{
	onClickHandler: () => void;
	children: JSX.Element | JSX.Element[];
}> = ({ children, onClickHandler }) => {
	return <button onClick={onClickHandler}>{children}</button>;
};

export default ActionButton;
