import { map } from '../containers/map.js';
import { card } from '../containers/card.js';
import { notfound } from '../containers/notfound.js';

export const fetchData = async (input) => {
    const API = 'https://geo.ipify.org/api/v1?';
    const API_KEY = 'apiKey=at_e2oyge0E3xtR3lT3UpEB8kEScEdY1';

    try {
        const response = await fetch(`${API}${API_KEY}&ipAddress=${input}&domain=${input}`);
        const responseJson = await response.json();

        map(responseJson);
        card(responseJson);
    } catch(error) {
        console.log(error.message);
        notfound();
    }
};