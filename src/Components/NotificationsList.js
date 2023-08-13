import { Box, Button, ListItem, Menu, ListItemAvatar, Avatar, ListItemText, Link, Typography, List, Divider } from "@mui/material";
import { inlineText, notificationWrapper } from "../Styles/style";
import { notificationData } from "../Data/app.data";
import useToggle from '../Hooks/UseToggle';
import { BsBellFill } from "react-icons/bs";

const NotificationsList = () => {
    const { element, open, handleOpen, handleClose } = useToggle();

    return (
        <Box sx={{ px: 1 }}>
            <Button id='basic-button' onClick={handleOpen}>
                <BsBellFill size={24} />
            </Button>
            <Menu id='basic-menu' anchorEl={element} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                <List sx={notificationWrapper}>
                    {
                        notificationData.map(({id, url, text, alt, avatar, time}) => {
                            return (
                                <Link href={url} key={id} underline="none">
                                    <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={alt} src={avatar} />
                                        </ListItemAvatar>
                                        <ListItemText primary={text} secondary={
                                            <>
                                                <Box component='span' sx={{ mt:2 }}>
                                                    <Typography component='span' sx={inlineText}>{time}</Typography>
                                                </Box>
                                            </>
                                        }></ListItemText>
                                    </ListItem>
                                    {
                                        notificationData.length !== id && (
                                            <Divider variant='inset' component='li' />
                                        )
                                    }
                                </Link>
                            )
                        })
                    }
                </List>
            </Menu>
        </Box>
    )
}

export default NotificationsList