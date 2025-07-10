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
