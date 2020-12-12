import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import DeviceInfoScreen from '../components/tickets/DeviceInfoScreen';
import SelectDeviceScreen from '../components/tickets/SelectDeviceScreen';

const UserRouter = () => {
    return (
        <div>
        <Switch>
            
            <Route exact path="/user/type" component={SelectDeviceScreen} />

            <Route exact path="/user/deviceInfo/:type" component={ DeviceInfoScreen } />

            <Redirect to="/user/type" />

        </Switch>
        </div>
    )
}

export default UserRouter;
