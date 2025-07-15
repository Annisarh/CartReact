import React from "react";
import AuthLayout from "../component/Layouts/AuthLayout";
import FormLogin from "../component/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <div className="max-w-sm bg-yellow-200 p-4 mx-auto my-16">
      <AuthLayout text="Halaman Login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
