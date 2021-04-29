import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const Usuarios = (props) => {
    const classes = useStyles();

    const editaUsuario = () => {
        const id = "8eb6280c-4266-41c0-8b04-98f94038238a";
        props.history.push("/admin/usuario/" + id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                USUARIOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>865517e3-9f12-4cec-99a8-fabd4d547b30</TableCell>
                            <TableCell>John Peralta</TableCell>
                            <TableCell>john@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button
                                variant="contained"
                                color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>524fc099-6c60-40b9-8589-12a29858a0b7</TableCell>
                            <TableCell>Nestor Arcila</TableCell>
                            <TableCell>nestor@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button
                                variant="contained"
                                color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Usuarios;