document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const name = document.querySelector('input[placeholder="Write your name here.."]').value;
      const email = document.querySelector('input[placeholder="Let us know how to contact you back.."]').value;
      const message = document.querySelector('input[placeholder="What would you like to tell us.."]').value;
  
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all the fields.");
        return;
      }
      alert("Submitted Data:\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
  
      
      form.reset();
    });
  });