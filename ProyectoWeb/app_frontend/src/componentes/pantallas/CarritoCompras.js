import { Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyle';

const CarritoCompras = () => {
    const classes = useStyles();

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                CARRITO DE COMPRAS
            </Typography>
        </Container>
    );
};

export default CarritoCompras;