import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center bg-slate-300e min-h-screen items-center gap-2">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="font-semibold">sorry, an unexpected error has occured</p>
      <p className="font-semibold">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
