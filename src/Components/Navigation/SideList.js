import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { sideListWrapper } from '../../Styles/style'
import { sideListItems } from '../../Data/app.data'

const SideList = ({ isOpen }) => {
  return (
    <Box sx={sideListWrapper} component='aside' overflow='hidden auto'>
        {
            sideListItems.map(({ subdivision, id, text, divider, icon }) => {
                return (
                    <React.Fragment key={id}>
                        {
                            subdivision ? (
                                <>
                                    <Divider />
                                    <Box sx={{ ml:2, mt:2 }}>
                                        <Typography sx={{ textTransform:'uppercase', fontWeight: 'bold' }} variant='button' display={isOpen ? 'block' : 'none'} gutterBottom>
                                            {text}
                                        </Typography>
                                    </Box>
                                </>
                            ) : divider ? (
                                <Divider />
                            ) : (
                                <nav aria-label='side list items'>
                                    <List sx={{ p:0 }}>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>{icon}</ListItemIcon>
                                                <ListItemText>{text}</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            )
                        }
                    </React.Fragment>
                )
            })
        }
    </Box>
  )
}

export default SideList