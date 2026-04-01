import { useState, useCallback, useEffect } from 'react';

export const useInputNumber = (decimals: number = 3, initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);

    // Sync initial value if it changes
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    // Handle input changes
    const handleNumberChange = useCallback((inputValue: string | number | null | undefined) => {
        // Ensure value is a string type
        let stringValue: string;
        if (inputValue === null || inputValue === undefined) {
            stringValue = '';
        } else if (typeof inputValue === 'number') {
            stringValue = String(inputValue);
        } else {
            stringValue = inputValue;
        }

        // Allow clearing the input box
        if (stringValue === '') {
            setValue('');
            return '';
        }

        // Handle regular expressions for numbers and decimal points
        const decimalRegex = new RegExp(`^\\d*\\.?\\d{0,${decimals}}$`);
        const leadingZeroRegex = /^0\d+/;  // Detect cases where 0 is followed by a number

        // Handle cases where 0 is at the beginning
        if (leadingZeroRegex.test(stringValue)) {
            stringValue = stringValue.replace(/^0+/, ''); // Remove leading 0
        }

        // Special handling for cases where "0." is at the beginning
        if (stringValue.startsWith('0.') || stringValue === '0') {
            if (decimalRegex.test(stringValue)) {
                setValue(stringValue);
                return stringValue;
            }
            return value;
        }

        // Verify other number formats
        if (decimalRegex.test(stringValue) && stringValue.charAt(0) !== '.') {
            setValue(stringValue);
            return stringValue;
        }
        return value;
    }, [decimals, value]);

    return {
        value,
        setValue,
        handleNumberChange
    };
}; 