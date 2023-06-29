import { useEffect } from "react";

export function AuthTemplate({ children }: { children: JSX.Element }) {
  useEffect(() => {
    const ExistToken = localStorage.getItem("@Token");

    if (!ExistToken) window.location.href = "/";
  }, []);

  return children;
}
