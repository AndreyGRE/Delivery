import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
//import WithRestoService from '../hoc'
import Background from './food-bg.jpg';

const App = ({RestoService}) => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default(App);