import React from 'react';

interface Props {
    size: 'sm' | 'md' | 'lg';
    color: 'accent' | 'neutral' | 'dark';
}

const Spinner = ({ size, color }: Props) => {
    const borderColor =
        color === 'accent'
            ? 'border-accent-dark/80 border-r-accent-dark'
            : color === 'dark'
              ? 'border-black/60 border-r-black'
              : 'border-white/60 border-r-white';

    return (
        <div className="flex items-center justify-center">
            <div
                className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} animate-spin rounded-full border-4 ${borderColor}`}
            />
        </div>
    );
};

export default Spinner;
