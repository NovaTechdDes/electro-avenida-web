'use client';

import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded border cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700  w-full dark:text-white text-black my-5"
    >
      {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  );
};
