import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { appContentWrapper, flexColumnGrow } from '../Styles/style';
import SideList from './Navigation/SideList';
import TabList from './TabList';
import CardList from './CardList';
import Shorts from './Shorts';
import { getYoutubeAPIData } from '../Hooks/useAxiosFetcher';

const AppContent = ({ isOpen, search, onTabChange }) => {
    const [hide, setHide] = useState(false);
    const [youtubeData, setYoutubeData] = useState([]);

    const sidebarWidth = isOpen ? '250px' : '70px';
    const items1 = youtubeData?.slice(0, 10);
    const items2 = youtubeData?.slice(10);

    useEffect(() => {
        getYoutubeAPIData(search)
        .then(res => {
            console.log(res);
            setYoutubeData(res?.data.items);
        }).catch(err => console.error(err));
    }, [search]);

    const hideShorts = () => {
        setHide(true);
    };

    const undoHide = () => {
        setHide(false);
    };

    return (
        <Box component='main' sx={appContentWrapper}>
            <Box component='aside' sx={{
                flexBasis: sidebarWidth,
                flexGrow: 0,
                flexShrink: 0,
                overflowY: 'auto',
                transition: '500ms ease-in-out'
            }}>
                <SideList isOpen={isOpen} />
            </Box>
            <Box component='div' sx={flexColumnGrow}>
                <Box sx={{ my: 2, width: `calc(100vw - ${sidebarWidth})` }}>
                    <TabList onTabChange={onTabChange} />
                </Box>
                <Box
                    component='div'
                    sx={{
                        flexGrow:1,
                        p:1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        width: `calc(100vw - ${sidebarWidth})`
                    }}
                >
                    <CardList items={items1} />
                    <Box
                        component='div'
                        sx={{
                            p: 2, mb:4,
                            overflow:'auto',
                            display: 'block',
                            overflowX:'hidden',
                            minHeight: '100px',
                            width: `calc(100vw - ${sidebarWidth})`
                        }}
                    >
                        <Shorts hideShorts={hideShorts} isHidden={hide} undoHide={undoHide} />
                    </Box>
                    <CardList items={items2} />
                </Box>
            </Box>
        </Box>
    )
}

export default AppContent