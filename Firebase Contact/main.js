// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAeyTK--2iiapj4pBiHFTGTsMAZTwVODaY",
    authDomain: "web-portfolio-61171.firebaseapp.com",
    databaseURL: "https://web-portfolio-61171.firebaseio.com",
    projectId: "web-portfolio-61171",
    storageBucket: "web-portfolio-61171.appspot.com",
    messagingSenderId: "804764456709",
    appId: "1:804764456709:web:eebb853c57e002a8d7096c",
    measurementId: "G-KQD0MTYQ8Z"
  };

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("contactData");

submitBtn.addEventListener('click', function(){
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userMessageInput = userMessage.value;


  db.doc()
  .set({
    name: userNameInput,
    email: userEmailInput,
    message: userMessageInput
  })
  .then(function(){
    console.log("Data Saved");
  })
  .catch(function(error) {
    console.log(error);
  });
});


/*
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

//reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


//submit form
function submitForm(e){
	e.preventDefault();

	// get values
	var name = getInputVal('name');
	var email = getInputVal('email');
	var password = getInputVal('password');
	var message = getInputVal('message');
	//save message
	saveMessage(name, email, password, message);

	//show alert
	document.querySelector('.alert').style.display = 'block';
	//Hide alert after 3 seconds
	setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
	},3000);

	//clear form
	document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, password, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      password: password,
      message: message,
    });
}

*/



















