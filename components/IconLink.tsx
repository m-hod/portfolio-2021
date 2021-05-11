import { Icon } from 'react-feather';

export default function IconLink({ link, Icon }: { link: string; Icon: Icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="m-4 hover:opacity-75"
    >
      <Icon size={32} />
    </a>
  );
}
