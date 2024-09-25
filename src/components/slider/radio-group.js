import React from "react";
import "./radio-group.scss"

const RadioGroup = ({ options, selectedOption, onChange }) => {
    return (
        <div className="radio-group">
            {options.map((option) => (
                <label key={option.value} className="radio-label">
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={onChange}
                        className="radio-input"
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;