const Http = new XMLHttpRequest();
const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelectorAll(".form");
const submitInput = form[0].querySelector('button[type="submit"]');
var user={
  username:'',
  password:'',
  email:''
}
function login(username, password, email) {
  if (!username || !password || !email) {
    alert("Please fill out all fields");
  } else {
    user.username=username;
    user.password=password;
    user.email=email;
    const url = `http:/users/${username}/${password}/${email}`;
    console.log("here");

    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = (e) => {
      location.href = Http.responseURL;
    };
  }
}

function getDataForm(e) {
  e.preventDefault();
  var formData = new FormData(form[0]);

  const username = formData.get("uname"),
    password = formData.get("password"),
    email = formData.get("emailField");
  login(username, password, email);
}


document.getElementById("submit").addEventListener("click", getDataForm, false);
