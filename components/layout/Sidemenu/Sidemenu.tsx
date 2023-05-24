'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui';

export const menuItems = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Tasks', href: '/tasks', icon: 'check' },
  { label: 'Interactions', href: '/interactions', icon: 'chats' },
  { label: 'Integrations', href: '/integrations', icon: 'link' },
];

const Sidemenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="relative z-40 min-w-[40px] lg:min-w-[12rem] h-max">
      <div className="h-full py-4 px-0 lg:px-3 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => {
            const isRouteActive =
              item.href === '/'
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 text-gray-900 rounded-lg duration-100 hover:shadow-md ${
                    isRouteActive ? 'text-white bg-gray-900' : ''
                  }`}
                  id={`${item.href.replace('/', '')}-menu`}
                >
                  <Icon
                    icon={item.icon}
                    color={isRouteActive ? 'white' : 'black'}
                    size={24}
                  />
                  <span className="ml-3 font-euclid-triangle hidden lg:block">
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
