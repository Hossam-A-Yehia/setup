// components/atoms/Input.tsx
import React from 'react';

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?:boolean
}

const Input: React.FC<InputProps> = ({ id, type, value, onChange, placeholder, required }) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
    required={required}
  />
);

export default Input;
