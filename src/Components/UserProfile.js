import { Box, Button, ListItem, Menu, ListItemAvatar, Avatar, ListItemText, Link, Typography, List, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { FaUserCircle } from 'react-icons/fa';
import { inlineText } from "../Styles/style";
import { userProfileItems } from "../Data/app.data";
import useToggle from '../Hooks/UseToggle';

const UserProfile = () => {
    const { element, open, handleOpen, handleClose } = useToggle();

    return (
        <Box sx={{ px: 1 }}>
            <Button id='basic-menu-button' onClick={handleOpen}>
                <FaUserCircle size={24} />
            </Button>
            <Menu id='basic-menu' anchorEl={element} open={open} onClose={handleClose} MenuListProps={{
                'aria-labelledby': 'basic-menu-button'
            }}>
                <ListItem sx={{ pt: 0, pb: 1 }} alignItems='flex-start'>
                    <ListItemAvatar>
                        <Avatar alt='Channel Avatar' src={`https://i.pravatar.cc/150?img=2`} />
                    </ListItemAvatar>
                    <ListItemText primary='Oh my Javascript' secondary={
                            <>
                                <Typography sx={inlineText} component='span'>
                                    <Link href='#' underline='none'>Manage your Google Account</Link>
                                </Typography>
                            </>
                        }>
                    </ListItemText>
                </ListItem>
                <Box sx={{ minWidth: 300, borderTop: '1px solid #ddd' }}>
                    {
                        userProfileItems.map(({id, divider, icon, text}) => {
                            return (
                                <List sx={{p:0}} key={id}>
                                    {
                                        divider ? (<Divider />) : (
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>{icon}</ListItemIcon>
                                                    <ListItemText>{text}</ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    }
                                </List>
                            )
                        })
                    }
                </Box>
            </Menu>
        </Box>
    )
}

export default UserProfile