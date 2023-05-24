import Image from 'next/image';

interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 64 }) => {
  return (
    <Image
      className={`animate-spin m-auto h-[${size}px] w-[${size}px]`}
      src="/icons/loading.svg"
      alt="close"
      width={size}
      height={size}
    />
  );
};

export default Spinner;
