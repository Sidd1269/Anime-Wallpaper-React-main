import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Helper function to apply theme to DOM
const applyTheme = (theme) => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  const body = document.body;
  
  console.log('Applying theme:', theme); // Debug log
  
  // Update data-theme attribute
  root.setAttribute('data-theme', theme);
  
  // Save to localStorage
  localStorage.setItem('theme', theme);
  
  // CRITICAL: Add/remove 'dark' class for Tailwind dark mode
  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
    console.log('Added dark class to html element'); // Debug log
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    console.log('Removed dark class from html element'); // Debug log
  }
  
  // Update body class for background styles
  if (theme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    console.log('Body class set to: light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    console.log('Body class set to: dark-theme');
  }
  
  // Verify classes were applied
  const hasDarkClass = root.classList.contains('dark');
  const hasLightClass = root.classList.contains('light');
  console.log('HTML element classes:', root.classList.toString());
  console.log('HTML has dark class:', hasDarkClass, '| has light class:', hasLightClass);
  console.log('Body element classes:', body.classList.toString());
  console.log('Current computed background on html:', window.getComputedStyle(root).backgroundColor);
};

export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage or default to 'dark'
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      // Apply theme immediately (synchronously) before React renders
      applyTheme(savedTheme);
      return savedTheme;
    }
    // Apply default theme immediately
    applyTheme('dark');
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme whenever it changes (this handles theme toggles)
  useEffect(() => {
    console.log('useEffect triggered. Applying theme:', theme); // Debug log
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      console.log('Toggle theme: changing from', prevTheme, 'to', newTheme); // Debug log
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

