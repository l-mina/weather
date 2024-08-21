import './styles.css';
import {weatherData} from './weatherFetch.js';
import {zipSearch} from './processData.js';
import {validateForm} from './formValidate.js';

let rawData = undefined;

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click',()=>{
    if(validateForm()){
        rawData = weatherData();
        zipSearch(rawData);
    };
    
});

export {rawData};



