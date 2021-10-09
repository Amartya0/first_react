import s from './Button.module.scss';

export const Button = ({ onclick, text }) => {
	return (
		<button className={s.button} onClick={onclick}>
			<span>{text}</span>
		</button>
	);
};
