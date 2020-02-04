import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi-service';
import Row from '../row/';
import ErrorBoundry from '../error-boundry/';
import ItemDetails, { Record } from '../item-details';

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    render() {

        const { getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >
                
                    <Record field="gender" label="Gender"/>    
                    <Record field="eyeColor" label="Eye Color"/>    
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} >

                    <Record field="model" label="Model"/>    
                    <Record field="length" label="Length"/>
                    <Record field="manufacturer" label="Manufacturer"/>
                    <Record field="cargoCapacity" label="Cargo capacity"/>
                    <Record field="costInCredits" label="Cost"/> 
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    <Row
                    left={personDetails}
                    right={starshipDetails} />
                </div>

            </ErrorBoundry>
        )
    };
};
