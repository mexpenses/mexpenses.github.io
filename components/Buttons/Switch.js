import React, { useState } from 'react'

export const Switcher = ({ checked = false, onChange = _value => {}, textLeft, textRight }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        onChange(!isChecked);
        setIsChecked(!isChecked);
    };

    return (
        <label>
            <input
                type='checkbox'
                checked={isChecked}
                className='sr-only'
                onChange={handleCheckboxChange}
            />
            <div className='flex items-center justify-center rounded-md bg-white select-none'>
                <span className={`flex h-9 w-auto px-5 items-center justify-center rounded border shadow border-neutral-300 cursor-pointer ${
                    !isChecked ? 'bg-blue-500 text-white' : 'text-body-color'
                }`}>
                    {textLeft}
                </span>
                <span className={`flex h-9 w-auto px-5 items-center justify-center rounded border shadow border-neutral-300 cursor-pointer ${
                    isChecked ? 'bg-blue-500 text-white' : 'text-body-color'
                }`}>
                    {textRight}
                </span>
            </div>
        </label>
    );
}