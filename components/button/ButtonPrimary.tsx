import { Icon } from '@iconify/react';
import type { JSX } from 'react';
import React from 'react';

import { Spinner } from '../features';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    type: JSX.IntrinsicElements['button']['type'];
    size: 'sm' | 'md' | 'lg';
    variant: 'contained' | 'text' | 'outline';
    icon?: string;
    iconSize?: number;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

const ButtonPrimary = ({
    text,
    type,
    variant,
    size,
    icon,
    iconSize,
    fullWidth,
    loading,
    disabled,
    ...props
}: Props) => {
    const textSize = size === 'sm' ? 'text-sm' : 'text-md';
    const paddingSize =
        size === 'sm'
            ? 'px-[14px] py-2'
            : size === 'md'
              ? 'px-4 py-[10px]'
              : 'px-[18px] py-[10px]';
    return variant === 'contained' ? (
        <button
            className={`flex justify-center gap-1 border-accent-light bg-accent-light text-text-light-primary hover:border-accent-light hover:bg-accent-light/40 dark:border-accent-dark dark:bg-accent-dark hover:dark:border-accent-dark hover:dark:bg-accent-dark/40 hover:dark:text-text-dark-primary ${paddingSize} ${textSize} ${fullWidth ? 'w-full' : ''}`}
            disabled={disabled || loading}
            type={
                type === 'submit'
                    ? 'submit'
                    : type === 'reset'
                      ? 'reset'
                      : 'button'
            }
            {...props}
        >
            {loading ? (
                <Spinner size="sm" color="dark" />
            ) : (
                <>
                    {icon && (
                        <Icon
                            icon={`${icon}`}
                            width={iconSize}
                            height={iconSize}
                            className="m-auto"
                        />
                    )}
                    {text}
                </>
            )}
        </button>
    ) : variant === 'outline' ? (
        <button
            className={`flex justify-center gap-1 rounded-md border border-accent-light text-accent-light hover:border-accent-light hover:bg-accent-light-hover dark:border-accent-dark dark:text-accent-dark hover:dark:border-accent-dark hover:dark:bg-accent-dark-hover hover:dark:text-text-light-primary ${paddingSize} ${textSize} ${fullWidth && 'w-full'}`}
            disabled={disabled || loading}
            type={
                type === 'submit'
                    ? 'submit'
                    : type === 'reset'
                      ? 'reset'
                      : 'button'
            }
            {...props}
        >
            {loading ? (
                <Spinner size="sm" color="accent" />
            ) : (
                <>
                    {icon && (
                        <Icon
                            icon={`${icon}`}
                            width={iconSize}
                            height={iconSize}
                            className="m-auto"
                        />
                    )}
                    {text}
                </>
            )}
        </button>
    ) : (
        <button
            className={`flex justify-center gap-1 text-accent-light hover:text-accent-light-hover dark:text-accent-dark hover:dark:text-accent-dark-hover ${paddingSize} ${textSize} ${fullWidth && 'w-full'}`}
            disabled={disabled || loading}
            type={
                type === 'submit'
                    ? 'submit'
                    : type === 'reset'
                      ? 'reset'
                      : 'button'
            }
            {...props}
        >
            {icon && (
                <Icon
                    icon={`${icon}`}
                    width={iconSize}
                    height={iconSize}
                    className="m-auto"
                />
            )}
            {loading ? (
                <Spinner size="sm" color="accent" />
            ) : (
                <>
                    {icon && (
                        <Icon
                            icon={`${icon}`}
                            width={iconSize}
                            height={iconSize}
                            className="m-auto"
                        />
                    )}
                    {text}
                </>
            )}
        </button>
    );
};

export default ButtonPrimary;
