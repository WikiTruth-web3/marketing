import React, { useCallback } from 'react';
import { Input, InputProps } from './input';
import { useInputNumber } from '../../hooks/useInputNumber';

interface InputNumberProps extends Omit<InputProps, 'onChange' | 'value'> {
    decimals?: number;
    initialValue?: string;
    onChange?: (value: number) => void;
}

export const InputNumber: React.FC<InputNumberProps> = ({
    decimals = 3,
    initialValue = '',
    onChange,
    ...props
}) => {
    // Correctly using hook with initialValue
    const { value, handleNumberChange } = useInputNumber(decimals, initialValue);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = handleNumberChange(e.target.value);
        if (onChange && typeof newValue === 'string') {
            onChange(Number(newValue));
        }
    }, [handleNumberChange, onChange]);

    return (
        <Input
            {...props}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={handleChange}
            autoComplete="off"
        />
    );
};
