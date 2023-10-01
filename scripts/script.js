let sex = "남자";
const maleButton = document.querySelector("#male");
const femaleButton = document.querySelector("#female");

maleButton.addEventListener("click", () => {
  sex = "남자";
  maleButton.classList.remove("bc-lightgray");
  femaleButton.classList.add("bc-lightgray");
});

femaleButton.addEventListener("click", () => {
  sex = "여자";
  femaleButton.classList.remove("bc-lightgray");
  maleButton.classList.add("bc-lightgray");
});

const resultShadow = document.querySelector("#result-shadow");
const result = document.querySelector("#result");

Kakao.init("f65c2003da9f03aef02ca1df8ca216c3");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const group = Math.trunc(Math.max(parseInt(document.querySelector("#age").value), 20) / 5) - 4;
  let percent = 0;

  while (parseFloat(document.querySelector("#height").value) < data[sex][group][percent++]) {}

  let grade = 0;

  if (percent <= 4) {
    grade = 1;
  } else if (percent <= 11) {
    grade = 2;
  } else if (percent <= 23) {
    grade = 3;
  } else if (percent <= 40) {
    grade = 4;
  } else if (percent <= 60) {
    grade = 5;
  } else if (percent <= 77) {
    grade = 6;
  } else if (percent <= 89) {
    grade = 7;
  } else if (percent <= 96) {
    grade = 8;
  } else {
    grade = 9;
  }

  result.style.background = [
    "#3d5e2a",
    "#896c25",
    "#50595f",
    "#663526",
    "#6c7276",
    "#745343",
    "#896c26",
    "#50595f",
    "#5b3b1c",
  ][grade - 1];

  document.querySelector("#grade").innerText = `${grade}등급`;
  document.querySelector("#emoji").src = `images/grade-${grade}.png`;

  const details = `${sex} ${
    ["19~24", "25~29", "30~34", "35~39", "40~44", "45~49", "50~54", "55~59", "60~64"][group]
  }세 상위 ${percent}%`;

  document.querySelector("#details").innerText = details;

  document.querySelector("#share").addEventListener("click", () => {
    Kakao.Share.sendCustom({
      templateId: 100268,
      templateArgs: {
        image: `https://height-grade.pages.dev/images/share-${grade}.png`,
        title: `저의 키 등급은 ${grade}등급입니다`,
        description: details,
      },
    });
  });

  resultShadow.classList.remove("d-n");
});

const closeResult = document.querySelector("#close-result");

[resultShadow, closeResult].forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target === resultShadow || event.target === closeResult) {
      resultShadow.classList.add("d-n");
    }
  });
});

const howShadow = document.querySelector("#how-shadow");

document.querySelector("#open-how").addEventListener("click", () => {
  howShadow.classList.remove("d-n");
});

const closeHow = document.querySelector("#close-how");

[howShadow, closeHow].forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target === howShadow || event.target === closeHow) {
      howShadow.classList.add("d-n");
    }
  });
});
