const dob = document.querySelector(".dob");

const luckyNum = document.querySelector(".lucky-num");

const button = document.querySelector(".button");

const output = document.querySelector(".output");

function compareValues(sum, luckyNum) {
  if (sum % luckyNum === 0) {
    output.innerText = `You have a lucky birthday!`;
  } else {
    output.innerText = `Not a lucky birthday.`;
  }
}

function luckChecker(e) {
  const birthDate = dob.value;
  const sum = calculateSum(birthDate);

  if (birthDate == "" || luckyNum.value == "") {
    output.innerText = "Please fill the required fields.";
  } else if (luckyNum.value < 0) {
    output.innerText =
      "Negative number detected! Only positive numbers allowed.";
  } else if (sum && birthDate) {
    compareValues(sum, Number(luckyNum.value));
  }
}

function calculateSum(birthDate) {
  birthDate = birthDate.replaceAll("-", "");

  let sum = 0;
  for (let i = 0; i < birthDate.length; i++) {
    sum = sum + Number(birthDate[i]);
  }

  return sum;
}

button.addEventListener(`click`, luckChecker);
