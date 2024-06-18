import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { CiBookmarkCheck } from 'react-icons/ci'
import { SidebarItem } from './SidebarItem'
import { IoBaseballOutline, IoCodeWorkingOutline, IoPerson } from 'react-icons/io5'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LogoutButton } from './LogoutButton'

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    path: '/dashboard',
    icon: <CiBookmarkCheck size={30} />
  },
  {
    title: 'Todos',
    url: '/dashboard/rest-todos',
    path: '/dashboard/rest-todos',
    icon: <CiBookmarkCheck size={30} />
  },
  {
    title: 'Server Actions',
    url: '/dashboard/server-todos',
    path: '/dashboard/server-todos',
    icon: <CiBookmarkCheck size={30} />
  },
  {
    title: 'Cookies',
    url: '/dashboard/cookies',
    path: '/dashboard/cookies',
    icon: <IoCodeWorkingOutline size={30} />
  },
  {
    title: 'Productos',
    url: '/dashboard/products',
    path: '/dashboard/products',
    icon: <IoBaseballOutline size={30} />
  },
  {
    title: 'Perfil',
    url: '/dashboard/profile',
    path: '/dashboard/profile',
    icon: <IoPerson size={30} />
  },
]

export const Sidebar = async() => {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name ?? 'Anonymous';
  const avatar = session?.user?.image ?? 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';
  const userRol = session?.user?.roles ?? 'client';

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/" title="home">
              <Image
                src='https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg'
                className='w-32'
                alt='tailus logo'
                width={150}
                height={150}
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
              <Image
                src={avatar}
                className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28'
                width={150}
                height={150}
                alt={userName}
              />
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{ userName }</h5>
              <span className="hidden text-gray-400 lg:block">{ userRol }</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {
                items.map(item => (
                    <SidebarItem
                        key={item.path}
                        icon={item.icon}
                        path={item.path}
                        title={item.title}
                        url={item.url}
                    />
                ))
            }
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <LogoutButton/>
        </div>
    </aside>
  )
}
