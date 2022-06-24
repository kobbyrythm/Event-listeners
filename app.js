// 1.create button with innerHTML "yes1"
// 2.Ask the user firstname
// 3.Ask the users age
// 3.if the user is underaged,
//   a. add eventlistener when clicked the button's inner changes to the first name.
//   b. if user is qualified, do nothing.


function CheckAge() {

  const fullname = document.getElementsByClassName("Name1")[0];

  const Age = document.getElementsByClassName("Checked")[0];

  const Button1 = document.getElementsByClassName("Button1")[0];



  Askfirstname = prompt("Your first name");

  AskAge = prompt("Your Age");



  fullname.innerHTML = Askfirstname;



  if (AskAge < 18) {

    Button1.innerHTML = Askfirstname;

  } else {

    Button1.innerHTML = Button1.innerHTML;

  }



  Button1.addEventListener("click", () => {


    Button1.innerHTML = Askfirstname;

  });

} 