const avatarUser = document.querySelector(".avatar");
const nameUser = document.querySelector(".name");
const ageUser = document.querySelector(".age");
const sexUser = document.querySelector(".sex");
const countryUser = document.querySelector(".country");
const loginUser = document.querySelector(".login");
const passwordUser = document.querySelector(".password");
const emailUser = document.querySelector(".email");

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results[0]);
    const user = data.results[0];
    const { first, title } = user.name;
    const { country } = user.location;
    const { password, username } = user.login;
    avatarUser.setAttribute("src", user.picture.large);
    nameUser.textContent = `name: ${title} ${first}`;
    ageUser.textContent = `age: ${user.dob.age}`;
    sexUser.textContent = `gender: ${user.gender}`;
    countryUser.textContent = `country: ${country}`;
    loginUser.textContent = `login: ${username}`;
    passwordUser.textContent = `password: ${password}`;
    emailUser.textContent = `email: ${user.email}`;
  })
  .catch((error) => {
    console.log("Error", error);
  });
