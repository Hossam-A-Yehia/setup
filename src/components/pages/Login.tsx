// components/pages/Login.tsx
import React from 'react';
import LoginForm from '../organisms/LoginForm';

const Login: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <LoginForm />
    </div>
  </div>
);

export default Login;
