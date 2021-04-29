import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';
import MenuCliente from './desktop/MenuCliente';
import MenuAdmin from './desktop/MenuAdmin';
import MenuMovil from './movil/MenuMovil';
import MenuMovilPublico from './movil/MenuMovilPublico';
import MenuPublico from './desktop/MenuPublico';

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
                        <div className={classes.sectionMobile}>
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
                                    {/* <MenuMovilPublico clickHandler={closeToggle}/> */}
                                    <MenuMovil clickHandler={closeToggle}/>
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow}>
                            <Link to="/" color="inherit" className={classes.linkAppBarLogo} underline="none">
                                <Icon className={classes.mr} fontSize="large">store</Icon>
                                <Typography variant="h5">VAXI SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            {/* <MenuPublico /> */}
                            <MenuCliente />
                            <MenuAdmin />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;