// components/molecules/FormField.tsx
import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?:boolean;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, value, onChange,required }) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} required={required} />
  </div>
);

export default FormField;
