import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NewPage from './NewPage'
import App from './App'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/new-page" exact component={NewPage} />
            </Switch>
        </BrowserRouter>
    )
}