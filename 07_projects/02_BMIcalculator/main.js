const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if((height||weight) === '' || (height||weight) < 0 || isNaN(height||weight)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi < 18.6){
            results.innerHTML = `<span> ${bmi} :> Under Weight </span>`
        } else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span> ${bmi} :> Normal Range </span>`
        } else{
            results.innerHTML = `<span> ${bmi} :> Over Weight </span>`
        }
        
    }
})
