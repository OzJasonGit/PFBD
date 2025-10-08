'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaBox, 
  FaShoppingCart, 
  FaUsers, 
  FaChartBar,
  FaShareAlt 
} from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: FaHome,
    },
    {
      name: 'Products',
      href: '/admin/products',
      icon: FaBox,
    },
    {
      name: 'Orders',
      href: '/admin/orders',
      icon: FaShoppingCart,
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: FaUsers,
    },
    {
      name: 'Social Media',
      href: '/admin/social_media',
      icon: FaShareAlt,
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

