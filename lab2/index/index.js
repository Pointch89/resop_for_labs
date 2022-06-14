let menuUserCreate = document.querySelector(".reg-form__form_items");
let inputsOfMenu = menuUserCreate.querySelectorAll("input");
let btnCreateUser = document.querySelector("button");
let state;
document.getElementById("state").addEventListener("change", function () {
  state = this.value;
});
let answers = document.querySelectorAll('input[name="answer"]');
let container = document.querySelector(".users");

let usersArr = [];

btnCreateUser.addEventListener("click", () => {
  console.log(inputsOfMenu)
  console.log(container)
  console.log(state);
  console.log(getAnswers());
  let user = new User(
    inputsOfMenu[0].value,
    inputsOfMenu[1].value,
    inputsOfMenu[2].value,
    inputsOfMenu[3].value,
    inputsOfMenu[4].value,
    state,
    inputsOfMenu[5].value,
    inputsOfMenu[6].value,  
    inputsOfMenu[7].value,
    getAnswers(),
    container,
    deleteUser
  );
  console.log(user);
  usersArr.push(user);
});

function getAnswers() {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return answers[i].value;
    }
  }
}

function deleteUser(id) {
  for (let i = 0; i < usersArr.length; i++) {
    if (id === usersArr[i]?.id) {
      delete usersArr[i];
      return true;
    }
  }
}
