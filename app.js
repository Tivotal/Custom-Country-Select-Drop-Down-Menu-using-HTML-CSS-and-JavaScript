/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let btn = document.querySelector(".btn");
let searchBox = document.querySelector("input");
let btnSpan = document.querySelector(".btn span");

let options = null;

btn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

for (country of countries) {
  let option = `
    <li class="option">
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
    </li> `;

  wrapper.querySelector("ul").insertAdjacentHTML("beforeend", option);
  options = document.querySelectorAll(".option");
}

function searchCountry() {
  let search_query = searchBox.value.toLowerCase();
  for (option of options) {
    let is_matched = option
      .querySelector(".country-name")
      .innerText.toLowerCase()
      .includes(search_query);
    option.classList.toggle("hide", !is_matched);
  }
}

function selectOption() {
  let icon = this.querySelector(".iconify").cloneNode(true),
    countryName = this.querySelector(".country-name").cloneNode(true);

  btnSpan.innerHTML = "";
  btnSpan.append(icon, countryName);

  searchBox.value = "";
  wrapper
    .querySelectorAll(".hide")
    .forEach((el) => el.classList.remove("hide"));

  wrapper.classList.remove("active");
}

searchBox.addEventListener("input", searchCountry);
options.forEach((option) => {
  option.addEventListener("click", selectOption);
});
