import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Routes, Route } from "react-router";
import About from '../pages/about';
import Home from '../pages/home';
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import { Link } from 'react-router';
//import { useNavigate } from 'react-router';
import Detail from '../pages/detail';
import { useRef, useEffect } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const drawerWidth = 240;

const PermanentDrawerRight = () => {

    const homeRef = useRef();
    const handleSort = (order) => {
        if (homeRef.current) {
            homeRef.current.sortCoins(order);
        }

    };

     useEffect(() => {
    // 🔹 Mostrar 10 elementos al cargar
    if (homeRef.current) {
      homeRef.current.limitCoins(10);
    }
  }, []);

    const handleLimitChange = (e) => {
    const value = parseInt(e.target.value);
    if (homeRef.current) {
      homeRef.current.limitCoins(value);
    }
  };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

                <Home ref={homeRef} />

            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={() => handleSort("asc")}>
                            <ListItemIcon> <ArrowUpwardIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={"Ascending"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={() => handleSort("desc")}>
                            <ListItemIcon> <ArrowDownwardIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={"Descending"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Box sx={{ display: 'block' }}>
                            <Typography>
                                Limit to:
                            </Typography>
                            <input type="number"
                                min="1"
                                defaultValue="10"
                                onChange={handleLimitChange}
                                placeholder=""
                                style={{ width: "100%", marginTop: "5px" }}></input>
                        </Box>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};
export default PermanentDrawerRight;