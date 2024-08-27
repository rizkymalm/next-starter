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
            className="flex gap-2 rounded-md border-transparent bg-transparent p-2 text-white transition-all hover:bg-blue-900"
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
