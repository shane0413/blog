import { FaApple, FaGithub, FaGlobe, FaTelegram } from 'react-icons/fa';
import { SiAstro } from 'react-icons/si';

type FriendIconName = 'github' | 'astro' | 'telegram' | 'apple' | 'blog';

export default function FriendIcon({ name }: { name: FriendIconName }) {
  const icons = {
    github: FaGithub,
    astro: SiAstro,
    telegram: FaTelegram,
    apple: FaApple,
    blog: FaGlobe,
  };
  const Icon = icons[name];

  return <Icon aria-hidden="true" />;
}
