import {rawData} from './index.js';

export function zipSearch(rawData){
    rawData.then((data)=>{
        createCards(rawData);
    });

};

function displayCards(day){
    const container = document.getElementById("content");

    const card = document.createElement('div');
    card.classList.add('card');

    const temp = document.createElement('h1');
    temp.innerHTML = `${day.temp}&deg;`;

    const line = document.createElement('div');
    line.classList.add('line');

    const line2 = document.createElement('div');
    line2.classList.add('line');

    const con = document.createElement('div');
    con.classList.add('conditions');
    con.textContent = day.condition;

    const tempRange = document.createElement('div');
    tempRange.classList.add('temp-range');
    tempRange.innerHTML=`H:${day.high}&deg; L:${day.low}&deg;`;

    const desc = document.createElement('div');
    desc.classList.add('conditions-des');
    desc.textContent = day.desc;

    card.appendChild(temp);
    card.appendChild(line);
    card.appendChild(con);
    card.appendChild(tempRange);
    card.appendChild(line2);
    card.appendChild(desc);

    container.appendChild(card);
};


function createCards(rawData){
    let days = [];
    rawData.then((data)=>{
        for(let i = 0; i < 5; i++){
            const temp = data.days[i].temp;
            const high = data.days[i].tempmax;
            const low = data.days[i].tempmin;
            const condition = data.days[i].conditions;
            const desc = data.days[i].description;
            
            const tempCard = Details(temp,high,low,condition,desc);
            days.push(tempCard); 
        }
        const container = document.getElementById("content");
        container.textContent = " ";
        for(let i=0; i < days.length;i++){
            displayCards(days[i]);
        }
        
    });
    
    
};

let Details = function(temp,high,low,condition,desc){
    let details = {};
    details.temp = temp;
    details.high = high;
    details.low = low;
    details.condition = condition;
    details.desc = desc;

    return details;
};