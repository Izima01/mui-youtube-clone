import { RiVideoUploadFill } from 'react-icons/ri';
import { Box, Button, Menu, Typography, MenuItem } from "@mui/material";
import UseToggle from '../Hooks/UseToggle';
import { uploadMenuItems } from '../Data/app.data';

const Upload = () => {
    const { element, open, handleOpen, handleClose } = UseToggle();

    return (
        <Box sx={{ px: 1 }}>
            <Button id="basic-upload-button" onClick={handleOpen}>
                <RiVideoUploadFill size={24} />
            </Button>
            <Menu id='basic-upload-menu' anchorEl={element} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-upload-button' }}>
                {uploadMenuItems.map(({ id, icon, text }) => {
                    return (
                        <MenuItem key={id} onClick={handleClose}>
                            {icon && (<Box sx={{mr:1}}>{icon}</Box>)}
                            <Typography sx={{ textAlign: 'center', width: '100%' }} component='span'>
                                {text}
                            </Typography>
                        </MenuItem>
                    )
                })

                }
            </Menu>
        </Box>
    )
}

export default Upload