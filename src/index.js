import { fetchData } from './utils/fetchData.js';

const API = 'https://geo.ipify.org/api/v1?';
const API_KEY = 'apiKey=at_e2oyge0E3xtR3lT3UpEB8kEScEdY1';

const btn = document.querySelector('button');
const input = document.querySelector('input');

const getInputData = e => {
    e.preventDefault();
    
    const validateInput = input.value.trim().toLocaleLowerCase();
    fetchData(API, API_KEY, validateInput);
}

btn.addEventListener('click', getInputData);



