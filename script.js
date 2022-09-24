//Retrieving HTML elements from the DOM

const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');

function showError(input, message) {
    const formControl = input.parentElement;
    // formControl.className = 'form_control error'
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');

}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkreq (arr){
    arr.forEach(function(input)  {
        // console.log(arr)
        if (input.value === ""){
            showError(input,`${getlabel(input)} is required `)
        }else {
            showSuccess(input);
        }
    });
};
function getlabel (input){
    return input.parentElement.querySelector('label').innerText

}



//Event listeners
//Create event listener for submit button

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    checkreq([userName,email,password,password2])

});
