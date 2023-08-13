import { useEffect, useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavMenu from './Components/Navigation/NavMenu';
import { appWrapper } from './Styles/style';
import { Box } from '@mui/material';
import AppContent from './Components/AppContent';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState('javascript');

  const handleDrawerToggle = () => {
    setOpen(!isOpen);
  };

  const onTabChange = (newValue) => {
    setSearch(newValue);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <Box sx={appWrapper}>
      <NavMenu handleDrawerToggle={handleDrawerToggle} handleSearch={setSearch} search={search} />
      <AppContent isOpen={isOpen} search={search} onTabChange={onTabChange} />
    </Box>
  );
}

export default App;
