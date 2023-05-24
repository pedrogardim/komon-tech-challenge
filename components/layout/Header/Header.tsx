import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="w-screen border-b border-neutral-400">
      <nav className="container mx-auto py-5 flex flex-row items-center">
        <Image
          className="h-9"
          src="/komon.svg"
          alt="Komon Logo"
          width={159}
          height={36}
          priority
        />
        <span className="font-euclid-triangle uppercase ml-4">Dashboard</span>
        <Image
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Avatar"
          width={64}
          height={64}
          className="ml-auto h-10 w-10 cursor-pointer rounded-full object-cover"
        />
      </nav>
    </header>
  );
};

export default Header;
