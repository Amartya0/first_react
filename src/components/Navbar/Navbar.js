import s from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<nav className={s.main}>
			<ul>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#works">Works</a>
				</li>
				<li>
					<a href="#contact">Contact Me</a>
				</li>
			</ul>
		</nav>
	);
};
