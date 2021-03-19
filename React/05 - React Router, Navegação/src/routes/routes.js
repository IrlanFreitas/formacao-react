import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import NotFound from '../pages/NotFound'

const Routes = () =>
    <>
        {/* Parecido com o Switch|Case, depois que encontrar a rota vai parar de procurar */}
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sobre' exact component={Sobre} />
            {/* Duas formas de fazer a mesma coisa */}
            {/* <Route path='/*' component={NotFound} /> */}
            <Route component={NotFound} />
        </Switch>
    </>

export default Routes