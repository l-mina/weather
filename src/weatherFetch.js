
async function weatherData() {

    const zip = document.getElementById("zipcode").value;
    const radio = document.getElementById("degrees");
    let degrees = ' ';
    if(radio.checked) {
        degrees = 'metric';
    } else degrees = 'us'
    
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?unitGroup=${degrees}&key=7DPCGMFUJSJ7BURXBQTTC88WL&contentType=json`, {mode: 'cors','method': 'GET',});
    const cityData = await response.json();

    return cityData;
};

export {weatherData};