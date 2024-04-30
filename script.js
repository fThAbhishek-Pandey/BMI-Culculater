const form = document.querySelector('form')

form.addEventListener('submit',function(ele){
    ele.preventDefault()
    
    const height = parseInt(document.querySelector('#hi').value)
    const weight = parseInt(document.querySelector('#wt').value)
    const answer = document.querySelector('#ans')
    // checking the input value
    if (height ==="" || height<0|| isNaN(height)){
        answer.innerHTML= `Please give a valid height ${height}`;
    }
    else if (weight ==="" || weight<0|| isNaN(weight)){
        answer.innerHTML= `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = ((weight*height)/1000).toFixed(2)
        answer.innerHTML=`<span>${bmi}</span>`;
    }
    
})