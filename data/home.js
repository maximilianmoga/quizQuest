import  saveUser  from './api.js'
import makeUser from './make-user.js';

// go grab the form from the home page
const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('enter', function (event) {

    event.preventDefault();


    const formData = new FormData(userSignUp);
   
    const user = makeUser(formData);


    saveUser(user);


    window.location = 'map';
});