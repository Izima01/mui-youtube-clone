import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { appBar, flexAlignCenter, hideOnMobile, logoText, toolbarWrapper } from '../../Styles/style';
import { AiFillYoutube } from 'react-icons/ai';
import SearchBar from './SearchBar.js';
import MenuIcon from '@mui/icons-material/Menu';
import UserProfile from '../UserProfile';
import NotificationsList from '../NotificationsList';
import Upload from '../Upload';

const NavMenu = ({ handleDrawerToggle, handleSearch, search }) => {
  return (
    <AppBar component='nav' sx={appBar}>
        <Toolbar>
            <Box sx={toolbarWrapper}>
                <Box sx={flexAlignCenter}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <AiFillYoutube size={32} fill='red' />
                    <Typography variant='h6' component='div' sx={logoText}>Youtube</Typography>
                </Box>
                <Box>
                    <SearchBar handleSearch={handleSearch} search={search} />
                </Box>
                <Box sx={hideOnMobile}>
                    <Upload />
                    <NotificationsList />
                    <UserProfile />
                </Box>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default NavMenu