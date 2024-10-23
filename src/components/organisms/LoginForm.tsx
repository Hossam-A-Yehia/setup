import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { useLogin } from "../../hooks/useLogin";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useLogin();

  const { mutate, isPending, error } = mutation;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log("FAILD", data);
        },
        onError: (error) => {
          console.error("SUCCESS", error);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>
      {error && <div className="text-red-500 mt-4">Error: {error.message}</div>}
    </form>
  );
};

export default LoginForm;
