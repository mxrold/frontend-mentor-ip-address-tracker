import { map } from '../containers/map.js';
import { card } from '../containers/card.js';
import { notfound } from '../containers/notfound.js';

export const fetchData = async (API, API_KEY, input) => {
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