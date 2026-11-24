import { useEffect, useState } from 'react';
import { homeQuotes } from '../config/homeQuotes';

export default function QuoteShuffle() {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		let switchTimer = 0;
		const timer = window.setInterval(() => {
			setVisible(false);
			switchTimer = window.setTimeout(() => {
				setIndex((current) => (current + 1) % homeQuotes.length);
				setVisible(true);
			}, 260);
		}, 3000);
		return () => {
			window.clearInterval(timer);
			window.clearTimeout(switchTimer);
		};
	}, []);

	return (
		<p className={visible ? 'home-quote visible' : 'home-quote'} aria-live="polite">
			{homeQuotes[index]}
		</p>
	);
}
