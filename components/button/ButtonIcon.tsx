import React from 'react';
import { Icon } from '@iconify/react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    onClick?: any;
    iconSize?: number;
    type: JSX.IntrinsicElements['button']['type'];
}

const ButtonIcon = ({ icon, iconSize, type, onClick, ...props }: Props) => {
    return (
        <button
            className="p-1 rounded-md border-transparent bg-transparent text-accent-dark transition-all"
            type={type}
            onClick={onClick}
            {...props}
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
