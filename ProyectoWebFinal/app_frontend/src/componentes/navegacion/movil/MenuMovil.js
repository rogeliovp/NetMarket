import { Avatar, Collapse, Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

const MenuMovil = (props) => {

    const [ openCliente, setOpenCliente] = useState(false);
    const [ openAdmin, setOpenAdmin] = useState(false);

    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    }

    const handleClickAdmin = () => {
        setOpenAdmin((prevOpen) => !prevOpen);
    }

    const classes = useStyles();
    return (
        <>
            <ListItem button onClick={handleClickCliente} className={classes.listItem}>
                <div className={classes.linkAppBarMobile}>
                    <Avatar 
                    alt="mi imagen"
                    className={classes.avatarPerfilAppBar}
                    src="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                    />
                    <ListItemText>John Peralta</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>Cerrar Sesion</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/* admin */}
            <ListItem button onClick={handleClickAdmin} className={classes.listItem}>
                <div className={classes.linkAppBarMobile}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>admin_panel_settings</Icon>
                    </ListItemIcon>
                    <ListItemText>Admin</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>
            <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/usuarios">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Usuarios</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/listaProductos">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/* fin admin */}
            <ListItem button className={classes.listItem}
            onClick={props.clickHandler}>
                <Link className={classes.linkAppBarMobile} to="/admin/listaPedidos">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>Mis Pedidos</ListItemText>
                </Link>
            </ListItem>
        </>
    );
};

export default MenuMovil;