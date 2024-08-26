import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const menuBar = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
];

const SidebarMenu = () => {
    const pathname = usePathname();
    return (
        <ul className="px-5 [&>li]:cursor-pointer [&>li]:py-1">
            {menuBar.map(data => (
                <li key={data.name}>
                    <Link
                        href={data.link}
                        className="group float-right flex gap-2 overflow-hidden py-1"
                    >
                        {pathname === data.link && (
                            <div className="text-text-sm text-yellow-600">
                                {data.name}
                            </div>
                        )}
                        {pathname !== data.link && (
                            <div className="translate-x-[150%] text-text-sm text-yellow-600 transition-all group-hover:translate-x-0">
                                {data.name}
                            </div>
                        )}
                        <div className="content-center">
                            <div
                                className={`h-[10px] w-[10px] rounded-md border border-yellow-600 hover:bg-yellow-600 ${pathname === data.link && 'bg-yellow-600'}`}
                            ></div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SidebarMenu;
