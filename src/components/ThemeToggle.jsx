import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { trackThemeChange } from '../utils/analytics';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    trackThemeChange(newTheme);
    toggleTheme();
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {isDark ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
