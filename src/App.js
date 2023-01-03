import React from 'react';

import LoginScreen from './Components/LoginScreen/LoginScreen';
import SignUp from './Components/SignUp/SignUp';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import ClaimFood from './Components/ClaimFood/ClaimFood';
import ClaimAprooval from './Components/ClaimAprooval/ClaimAprooval';
import PickUp from './Components/PickUp/PickUp';
import DeliveryMap from './Components/DeliveryMap/DeliveryMap';
import Dashboard from './Components/Dashboard/Dashboard';
import DonationDetailsRestaurant from './Components/DonationDetailsRestaurant/DonationDetailsRestaurant';
import DonationUpdate from './Components/DonationUpdate/DonationUpdate';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import RoleSelector from './Components/RoleSelector/RoleSelector';
import NGO from './Components/NGO/NGO';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import DonationRequest from './Components/DonationRequest/DonationRequest';
import DonateFood from './Components/DonateFood/DonateFood';
import RequestAccepted from './Components/RequestAccepted/RequestAccepted';
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
//error_404
import ErrorPage from './Components/ErrorPage';

import { Routes, Route } from 'react-router-dom';

//const path = process.env.REACT_APP_FOR_PATH;
//or PUBLIC_URL || basename={ process.env.PUBLIC_URL }

function App() {
    return (
        <>
            <Routes>
                {/* <Route path='/' exact element={<LoadingPage />} />
                <Route path='/LoginScreen' element={<LoginScreen />} />
                */}
                <Route path='/' element={<LoginScreen />} />
                <Route path='/RoleSelector' element={<RoleSelector />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/NGO' element={<NGO />} />
                <Route
                    path='/DonationDetails'
                    exact
                    element={<DonationDetails />}
                />
                <Route path='/ClaimFood' exact element={<ClaimFood />} />
                <Route
                    path='/ClaimAprooval'
                    exact
                    element={<ClaimAprooval />}
                />
                <Route path='/PickUp' exact element={<PickUp />} />
                <Route path='/DeliveryMap' exact element={<DeliveryMap />} />
                <Route path='/Dashboard' exact element={<Dashboard />} />
                <Route
                    path='/DonationRequest'
                    exact
                    element={<DonationRequest />}
                />
                <Route path='/DonateFood' exact element={<DonateFood />} />
                <Route path='/ConfirmOrder' exact element={<ConfirmOrder />} />
                <Route
                    path='/RequestAccepted'
                    exact
                    element={<RequestAccepted />}
                />
                <Route
                    path='/DonationDetailsRestaurant'
                    exact
                    element={<DonationDetailsRestaurant />}
                />
                <Route
                    path='/DonationUpdate'
                    exact
                    element={<DonationUpdate />}
                />
                <Route path='/HomeScreen' exact element={<HomeScreen />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
