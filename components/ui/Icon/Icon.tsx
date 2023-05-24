import Image from 'next/image';

interface IconProps {
  icon: string;
  size?: number;
  color?: 'black' | 'white';
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size = 20,
  color = 'black',
  className,
}) => {
  return (
    <Image
      className={`${className} ${color === 'white' ? 'invert' : ''}`}
      src={`/icons/${icon}.svg`}
      alt={icon}
      width={size}
      height={size}
    />
  );
};

export default Icon;
