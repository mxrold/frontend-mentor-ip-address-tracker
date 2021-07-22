import { fetchData } from './utils/fetchData.js';

const btn = document.querySelector('button');
const input = document.querySelector('input');

const getInputData = e => {
    e.preventDefault();
    
        const validateInput = input.value.trim().toLocaleLowerCase();
        fetchData(validateInput);
}

console.log(input)

btn.addEventListener('click', getInputData);



