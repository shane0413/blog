import { useEffect, useState } from 'react';
import { homeQuotes } from '../config/homeQuotes';

export default function QuoteShuffle() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * homeQuotes.length));
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let switchTimer = 0;
    const timer = window.setInterval(() => {
      setVisible(false);
      switchTimer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % homeQuotes.length);
        setVisible(true);
      }, 180);
    }, 3000);
    return () => { window.clearInterval(timer); window.clearTimeout(switchTimer); };
  }, []);
  return <div className={`quote-feature ${visible ? 'is-visible' : ''}`} aria-live="polite">
    <p>{homeQuotes[index]}</p>
    <span className="quote-caption">随机摘录 · 每隔一段时间更新</span>
  </div>;
}
