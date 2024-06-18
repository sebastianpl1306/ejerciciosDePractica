'use client'
import { usePathname } from 'next/navigation';

interface Props {
  url: string;
  icon: JSX.Element;
  title: string;
  path: string;
}

export const SidebarItem = ({ icon, title, url, path }: Props) => {
  const pathName = usePathname();

  return (
    <li>
        <a href={url} className={`px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${
            pathName === path ? 'relative rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''
        }`}>
            {icon}
            <span className="group-hover:text-white">{title}</span>
        </a>
    </li>
  )
}