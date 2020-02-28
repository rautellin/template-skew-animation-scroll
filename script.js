let skewed = document.getElementById("skewed")

let scroll = () => {
  let value = - 10 + window.scrollY / 60;
  skewed.style.transform = `skewY(${value}deg)`
}

window.addEventListener("scroll", scroll)