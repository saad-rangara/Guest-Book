//DOM manipulation
//select the form
//select the feedback container

//FORM
//we need an event to submit the form data

//the event handler
//prevent.default
//a FormData object template
//get the formValues to insert them into the FormData object

const guestForm = document.getElementById("guestForm");
const guestList = document.getElementById("guestList");

guestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const number = document.getElementById("number").value;
    const feedback = document.getElementById("feedback").value;

    const guestCard = document.createElement("div");
    guestCard.classList.add("guest-card");
    guestCard.innerHTML = `
        <h2>${name}</h2> 
        <p><strong>Location:</strong> ${address}</p> 
        <p><strong>Favourite Number:</strong> ${number}</p> 
        <p><strong>Feedback:</strong> ${feedback}</p>`;

    guestList.appendChild(guestCard);
    guestForm.reset();
});


//fetch the CREATE endpoint to send formValues to the server
//WHEN YOU FINISH THE PROJECT, MAKE SURE YOU REPLACE THE
url;
// fetch("localhost-url/endpoint"),
// {
//     method:
//     headers:
//     body:
// }

//event listener ---> submit

//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data
//fetch the url
//parse the response json
//wrangle data, if necessary

//I need to display the data on the page
//! databaseData.forEach(item) => {
//I need to create DOM elements to contain the data
//one DOM element (h1, h2, p,...) per piece of data (username, comment)->
//for eg. i
//i need t
//};
