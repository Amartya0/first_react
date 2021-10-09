import { Navbar } from '../Navbar/Navbar';
import s from './Landing.module.scss';

export const Landing = () => {
	return (
		<div className={s.main}>
			<Navbar />
			<div>
				<div className={s.info}>
					<span>Hi! I am</span>
					<h1>Amartya Jash</h1>
					<p>Freelancer Problem solver Progammer and Developer.</p>
					<a href="#contact-me">Hire Me</a>
				</div>
			</div>
		</div>
	);
};
