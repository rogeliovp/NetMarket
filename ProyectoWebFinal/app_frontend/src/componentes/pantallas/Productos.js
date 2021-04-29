import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';

const Productos = (props) => {

    const miArray = ProductoArray;
    const verProducto = (id) => {
        props.history.push("/detalleProducto/" + id);
    }

    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                { miArray.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia
                        className={classes.media}
                        image="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                        title="mi producto"
                        >
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.titulo}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => verProducto(data.key)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Productos;