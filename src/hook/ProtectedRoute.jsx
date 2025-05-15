import React from "react";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; 

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/" />;
  }

  return children;
};

export default ProtectedRoute;
