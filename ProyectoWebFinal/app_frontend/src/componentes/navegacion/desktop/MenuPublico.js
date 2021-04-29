import { Button, Icon } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

const MenuPublico = () => {
    const classes = useStyles();
    return (
        <>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link to="/carrito" className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
            </Button>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link to="/login" className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}>person</Icon>
                    LOGIN
                </Link>
            </Button>
        </>
    );
};

export default MenuPublico;