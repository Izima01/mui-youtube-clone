import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { tabItems } from "../Data/app.data";

const TabList = ({ onTabChange }) => {
    const [value, setValue] = useState('All');

    const handleChange = (e, newValue) => {
        setValue(newValue);
        onTabChange(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons='auto' allowScrollButtonsMobile aria-label="scrollable tabs">
                {
                    tabItems.map(({ id, text }) => {
                        return (
                            <Tab key={id} value={text} label={text} />
                        )
                    })
                }
            </Tabs>
        </Box>
    )
}

export default TabList