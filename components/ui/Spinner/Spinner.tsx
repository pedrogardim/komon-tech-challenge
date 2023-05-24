import Icon from '../Icon/Icon';

interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 64 }) => {
  return (
    <Icon
      className={`animate-spin m-auto h-[${size}px] w-[${size}px]`}
      icon="loading"
      size={size}
    />
  );
};

export default Spinner;
