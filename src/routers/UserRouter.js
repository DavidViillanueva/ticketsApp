import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import DeviceInfoScreen from '../components/tickets/DeviceInfoScreen';
import SelectDeviceScreen from '../components/tickets/SelectDeviceScreen';

const UserRouter = () => {
    return (
        <div>
        <Switch>
            
            <Route path="/user/type" component={SelectDeviceScreen} />

            <Route path="/user/deviceInfo" component={ DeviceInfoScreen } />

            <Redirect to="/user/type" />

        </Switch>
        </div>
    )
}

export default UserRouter;
