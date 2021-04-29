import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyle';

const DetalleProducto = (props) => {
    const agregarCarrito = () => {
        props.history.push("/carrito");
    }

    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                ABRIGO VAXI
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                   <Paper className={classes.PaperImg} variant="outlined" square>
                        <CardMedia 
                        className={classes.mediaDetalle}
                        image="https://c0.klipartz.com/pngpicture/257/871/gratis-png-modelo-mujer-gestion-disenador-de-moda-femenina-dia-de-la-mujer.png"
                        title="Miproducto"
                        />
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">$25.99</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                        size="small"
                                        select
                                        variant="outlined">
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={agregarCarrito}>
                                            Agregar a Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: 25.99
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades: 15
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: Toro
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripción:
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Casaca Toro talla M, de algodón puro, de color negro
                                suave al tacto con la piel
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;