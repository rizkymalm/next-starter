import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { Reducers } from '@/redux/types';

import ButtonToggle from './ButtonToggle';

const ButtonThemeSwitch = () => {
    const dispatch = useDispatch();
    const systemState = useSelector((state: Reducers) => state.system);
    const [isChecked, setIsChecked] = useState(systemState.themes === 'dark');
    const { setTheme } = useTheme();
    useEffect(() => {
        if (systemState.themes === 'dark') {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }

        setTheme(systemState.themes);
    }, [isChecked, systemState.themes, setTheme]);

    const handleChangeButtonToggle = (e: any) => {
        e.preventDefault();
        if (systemState.themes === 'dark') {
            dispatch<any>({
                type: 'SYSTEM_THEMES',
                payload: 'light',
            });
        } else {
            dispatch<any>({
                type: 'SYSTEM_THEMES',
                payload: 'dark',
            });
        }
    };
    return (
        <ButtonToggle
            onClick={handleChangeButtonToggle}
            isChecked={isChecked}
        />
    );
};

export default ButtonThemeSwitch;
