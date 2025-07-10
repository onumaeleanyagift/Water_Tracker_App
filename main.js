const allSmallCups = document.querySelectorAll(".cup.small");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const fill = document.getElementById("fill");

allSmallCups.forEach((cup, cupIndex) => {
  cup.addEventListener("click", () => selectCups(cupIndex));
});

function selectCups(cupIndex) {
  if (
    allSmallCups[cupIndex].classList.contains("full") &&
    (cupIndex === allSmallCups.length - 1 ||
      !allSmallCups[cupIndex + 1].classList.contains("full"))
  ) {
    cupIndex;
  }

  allSmallCups.forEach((cup, i) => {
    if (i <= cupIndex) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  addBigCup();
}

function addBigCup() {
  const totalCups = allSmallCups.length;
  const fullCups = document.querySelectorAll(".cup.small.full").length;
  const percent = (fullCups / totalCups) * 100;
  const liter = 2 - (250 * fullCups) / 1000;

  fill.style.height = `${percent}%`;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    liters.innerText = "2L";
  } else {
    liters.innerText = `${liter}L`;
    fill.style.visibility = "visible";
    percentage.innerText = `${percent}%`;
    remained.style.visibility = "visible";
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
  }
}
