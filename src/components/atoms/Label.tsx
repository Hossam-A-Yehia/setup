// components/atoms/Label.tsx
import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label className="block text-gray-700 mb-2" htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
