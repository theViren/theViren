auth.onAuthStateChanged(user=>{
if(user){
    window.open("aboutMe.html", "_self");
    console.log('hii');

}else{
    console.log('bye');
}

});

const signupForm = document.querySelector('.sign-up-form');
signupForm.addEventListener('submit', (e)=>{
e.preventDefault();
const email= signupForm['signup-email'].value;
const password= signupForm['signup-password'].value;
firebase.auth().createUserWithEmailAndPassword(email, password).then(cred =>{
    signupForm.reset();
})
})
const logoutBtn= document.querySelector('#logout');
logoutBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('user logout')
    })
})

const loginForm= document.querySelector('.sign-in-form');
loginForm.addEventListener('submit', (e)=>{
e.preventDefault();
const email =loginForm['login-email'].value;
const password= loginForm['login-password'].value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(cred =>{
    console.log(cred.user);
console.log('user sihned in')
})

})
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  .then(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
    return firebase.auth().signInWithRedirect(provider);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });