
export function validateForm(){
    const zipCode = document.getElementById('zipcode');
    if(zipCode.value.length < 5){
        zipCode.classList.add('invalid');
        zipCode.focus();
        return false;
    }
    zipCode.classList.remove('invalid');
    return true;
};