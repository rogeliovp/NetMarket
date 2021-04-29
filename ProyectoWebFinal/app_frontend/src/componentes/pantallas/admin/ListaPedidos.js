import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const ListaPedidos = (props) => {
    const classes = useStyles();

    const verDetalle = () => {
        const id = "476751c9-3891-4a02-b8da-ac4e69b16df8";
        props.history.push("/ordenCompra/" + id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                PEDIDOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAGADO</TableCell>
                            <TableCell>ENTREGADO</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>476751c9-3891-4a02-b8da-ac4e69b16df8</TableCell>
                            <TableCell>Nestor Arcila</TableCell>
                            <TableCell>2020-12-22</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>2020-12-23</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>55e210f5-f068-4100-abe7-139331a4d6de</TableCell>
                            <TableCell>Ricardo Mendez</TableCell>
                            <TableCell>2020-12-20</TableCell>
                            <TableCell>$150.00</TableCell>
                            <TableCell>2020-12-23</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;