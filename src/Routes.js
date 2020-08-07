import React from "react";
import { Switch, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail"

// Return multilinea
const Routes = () => (
    <Switch>
        {/* El Prop de Component espera una clase o una función */}
        {/* Se usa la palabra exact (prop) para que la ruta deba coincidir completamente y no sólo parcialmente */}
        <Route exact path="/" component={() => <h1>Home</h1>} />
        {/* También se puede importar una Clase directamente */}
        {/* La url se convierte en un valor de params (id): */}
        <Route exact path="/detail/:id" component={ Detail } />
    </Switch>
)

export default Routes;