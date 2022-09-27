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

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,"Please provide a valid email   ")
    }
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
function checklength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getlabel(input)} needs to be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${getlabel(input)} needs to be less than ${max} characters`)
    }
};
function checkPass(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2,"Passwords don't match")
    }
}


//Event listeners
//Create event listener for submit button

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    checkreq([userName,email,password,password2]);
    checklength(userName,3,10);
    checklength(password,6,20);
    checkEmail(email);
    checkPass(password,password2);
});
