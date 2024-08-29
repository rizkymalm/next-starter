import React from 'react';
import { Icon } from '@iconify/react';

interface Props {
    icon: string;
    onClick?: any;
    iconSize?: number;
}

const ButtonIcon = ({ icon, iconSize, onClick }: Props) => {
    return (
        <button
            className="flex gap-2 rounded-md border-transparent bg-transparent p-2 text-black transition-all dark:hover:bg-blue-900 hover:bg-yellow-600/50 dark:text-white"
            type="button"
            onClick={onClick}
        >
            <Icon
                icon={`${icon}`}
                width={iconSize}
                height={iconSize}
                className="m-auto"
            />
        </button>
    );
};

export default ButtonIcon;
