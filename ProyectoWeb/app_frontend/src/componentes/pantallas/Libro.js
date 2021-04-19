import { Button, Card, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyle';

const clearLibro = {
    categoria: '',
    titulo: '',
    autor: ''
}

const Libro = () => {
    const [libro, setLibro] = useState({
        categoria: '',
        titulo: '',
        autor: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLibro(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const guardarData = () => {
        console.log("Mis datos son ", libro);
        setLibro(clearLibro);
    }

    const abrirDialog = () => {
        console.log("Mi boton editar");
    }

    const eliminarData = () => {
        console.log("boton eliminar");
    }

    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item lg={7} md={8}>
                    <Card className={classes.card} align="center">
                        <Typography variant="h4">Libros</Typography>
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                    select
                                    label="Categoría"
                                    variant="outlined"
                                    fullWidth
                                    align="left"
                                    name="categoria"
                                    value={libro.categoria}
                                    onChange={handleChange}
                                    >
                                        <MenuItem value="Programacion">Programacion</MenuItem>
                                        <MenuItem value="Historia">Historia</MenuItem>
                                        <MenuItem value="Matematica">Matematica</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField 
                                    label="Titulo"
                                    variant="outlined"
                                    fullWidth
                                    name="titulo"
                                    value={libro.titulo}
                                    onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField 
                                    label="Autor"
                                    variant="outlined"
                                    fullWidth
                                    name="autor"
                                    value={libro.autor}
                                    onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    type="submit"
                                    onClick={guardarData}>
                                        Guardar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>                    
                </Grid>
            </Grid>

            <TableContainer component={Paper} className={classes.containermt}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell align="center" colSpan={2}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Programacion</TableCell>
                            <TableCell>React Avanzado</TableCell>
                            <TableCell>Rogelio vilches</TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={abrirDialog}>
                                    Editar
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="secondary"
                                onClick={eliminarData}>
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Libro;
