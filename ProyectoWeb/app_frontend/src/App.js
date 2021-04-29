import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Productos from './componentes/pantallas/Productos';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import CarritoCompras from './componentes/pantallas/CarritoCompras';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={RegistrarUsuario} />
          <Route exact path="/" component={Productos} />
          <Route exact path="/detalleProducto/:id" component={DetalleProducto} />
          <Route exact path="/carrito" component={CarritoCompras} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
