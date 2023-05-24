'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Tasks', href: '/tasks', icon: 'check' },
  { label: 'Interactions', href: '/interactions', icon: 'chats' },
  { label: 'Integrations', href: '/integrations', icon: 'link' },
];

const Sidemenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="relative z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 h-max">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => {
            const isRouteActive = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 text-gray-900 rounded-lg duration-100 hover:shadow-md ${
                    isRouteActive ? 'text-white bg-gray-900' : ''
                  }`}
                >
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    alt="Komon Logo"
                    className={isRouteActive ? 'invert' : ''}
                    width={24}
                    height={24}
                  />
                  <span className="ml-3 font-euclid-triangle">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidemenu;
