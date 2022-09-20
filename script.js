//Retrieving HTML elements from the DOM

const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');

function showError (input, message){
    const formControl = input.parentElement;
    // formControl.className = 'form_control error'
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input){
    const formControl = input.parentElement;
    formControl.classList.remove('error');

}




//Event listeners
//Create event listener for submit button

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log("Submited");

    //Check if username is empty
    if (userName.value === ''){
        showError(userName, "Username is required")
    }else{
        showSuccess(userName);  
    }

    
    if (email.value === ''){
        showError(email, "Email is required")
    }else{
        showSuccess(email);  
    }

    
    if (password.value === ''){
        showError(password, "Password is required")
    }else{
        showSuccess(password);  
    }

    
    if (password2.value === ''){
        showError(password2, "Confirm Password is required")
    }else{
        showSuccess(password2);  
    }
});
