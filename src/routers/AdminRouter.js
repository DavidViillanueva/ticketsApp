import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AdminScreen from '../components/admin/AdminScreen'
import AddTicketScreen from '../components/tickets/AddTicketScreen'

const AdminRouter = () => {
    return (
        <div>
        <Switch>
            
            <Route exact path="/admin" component={AdminScreen} />

            <Route exact path="/admin/ticket-add/:id" component={ AddTicketScreen } />
            <Route exact path="/admin/ticket-add" component={ AddTicketScreen } />

            <Redirect to="/admin" />

        </Switch>
        </div>
    )
}

export default AdminRouter
