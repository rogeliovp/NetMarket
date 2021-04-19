import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyle';
import { Link } from 'react-router-dom';

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const openToggle = () => {
        setOpen(true);
    }

    const closeToggle = () => {
        setOpen(false);
    }

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMovil}>
                            <IconButton color="inherit" onClick={openToggle}>
                                <Icon fontSize="large">menu</Icon>
                            </IconButton>
                        </div>
                        <Drawer
                        open={open}
                        onClose={closeToggle}
                        >
                            <div className={classes.list}>
                                <List>
                                    <ListItem button className={classes.listItem} onClick={closeToggle}>
                                        <Link to="/login" color="inherit" underline="none" className={classes.linkAppBarMobile}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>Login</ListItemText>
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow}>
                            <Link to="/" color="inherit" underline="none" className={classes.linkAppBarLogo}>
                                <Icon className={classes.mr} fontSize="large">store</Icon>
                                <Typography variant="h5">DEMO SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit" className={classes.buttonIcon}>
                                <Link to="/login" color="inherit" underline="none" className={classes.linkAppBarDesktop}>
                                    <Icon className={classes.mr}>person</Icon>
                                    LOGIN
                                </Link>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;