import { useEffect, useState } from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { ScrollProvider } from './Context/ScrollContext';
import SecondaryMenu from './Components/SecondaryMenu';

function App() {
  const [sideMenu, setSideMenu] = useState(false)
  const [theme, setTheme] = useState('light');

  // theme dark/light 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // close side menu on screen resize 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 786) {
        setSideMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // prevent scroll restoration 
  // useEffect(() => {
  //   if ('scrollRestoration' in window.history) {
  //     window.history.scrollRestoration = 'manual';
  //   }
  //   window.scrollTo(0, 0);

  //   return () => {
  //     if ('scrollRestoration' in window.history) {
  //       window.history.scrollRestoration = 'auto';
  //     }
  //   };
  // }, []);

  // toggle side menu 
  function ToggleSecondaryMenu(value) {
    setSideMenu(value)
  };

  return (
    <div className="App">
      <ScrollProvider>
        <SecondaryMenu isOpen={sideMenu} toggleSecondaryMenu={ToggleSecondaryMenu} toggleTheme={toggleTheme} />
        {sideMenu && <div className={`overlay ${sideMenu ? 'visible' : ''}`} onClick={() => setSideMenu(false)} />}
        <Header toggleSecondaryMenu={ToggleSecondaryMenu} toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </ScrollProvider>

    </div>
  );
}

export default App;
