"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from ;

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Avoid rendering until client loads
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}