import Link from 'next/link';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Tasks', link: '/tasks' },
  { label: 'Interactions', link: '/interactions' },
  { label: 'Integrations', link: '/integrations' },
];

export default function Sidemenu() {
  return (
    <aside className="relative z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 h-max">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100"
              >
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
