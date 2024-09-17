'use client';

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const [globalTheme, setGlobalTheme] = useState<string>('');

  useEffect(() => {
    setGlobalTheme(() => localStorage.getItem('globalTheme') || 'light');
  }, []);

  const toggleDarkTheme = () => {
    const newTheme = globalTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('globalTheme', newTheme);
    setGlobalTheme(newTheme);
  };

  useEffect(() => {
    if (!globalTheme) {
      return;
    }
    if (globalTheme === 'light') {
      document?.body?.classList?.remove('dark');
    } else {
      document?.body?.classList?.add('dark');
    }
  }, [globalTheme]);

  return (
    <button onClick={toggleDarkTheme} className="mb text-gray-350">
      {globalTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
