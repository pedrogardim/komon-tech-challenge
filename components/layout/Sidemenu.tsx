const menuItems = ['Tasks', 'Interactions', 'Integrations'];

export default function Sidemenu() {
  return (
    <aside className="relative z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 h-max">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100"
              >
                <span className="ml-3">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
