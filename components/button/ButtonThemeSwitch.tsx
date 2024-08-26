import { Reducers } from '@/redux/types';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonToggle from './ButtonToggle';

const ButtonThemeSwitch = () => {
    const dispatch = useDispatch();
    const systemState = useSelector((state: Reducers) => state.system);
    const [isChecked, setIsChecked] = useState(
        systemState.themes === 'dark' ? true : false
    );
    const { setTheme } = useTheme();
    useEffect(() => {
        systemState.themes === 'dark'
            ? setIsChecked(true)
            : setIsChecked(false);
        setTheme(systemState.themes);
    }, [isChecked, systemState.themes, setTheme]);

    const handleChangeButtonToggle = (e: any) => {
        e.preventDefault();
        systemState.themes === 'dark'
            ? dispatch<any>({
                  type: 'SYSTEM_THEMES',
                  payload: 'light',
              })
            : dispatch<any>({
                  type: 'SYSTEM_THEMES',
                  payload: 'dark',
              });
    };
    return (
        <ButtonToggle
            onClick={handleChangeButtonToggle}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
        />
    );
};

export default ButtonThemeSwitch;
