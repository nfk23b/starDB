export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could't fetch ${url}` + `, recieved ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformSpaceship);
    }

    async getStarship(id) {
        const spaceship = await this.getResource(`/starships/${id}`);
        return this._transformSpaceship(spaceship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
          }
    }

    _transformSpaceship = (spaceship) => {
        return {
            id: this._extractId(spaceship),
            name: spaceship.name,
            model: spaceship.model,
            manufacturer: spaceship.manufacturer,
            costInCredits: spaceship.cost_in_credits,
            length: spaceship.length,
            crew: spaceship.crew,
            passengers: spaceship.passengers,
            cargoCapacity: spaceship.cargo_capacity
          }
    }
}