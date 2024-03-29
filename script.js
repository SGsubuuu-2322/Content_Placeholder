// This is the script file for this web-app created using JS technology...

// These are some ids used in the HTML structure file for capturing the DOM elements for further modifications...
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_texts_bgs = document.querySelectorAll(".animated-text-bg");

// This is the settime out function for getting the data after 2.5s
setTimeout(getData, 2500);

// These are for showcasing the fetched data onto the card dynamically...
function getData() {
  header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    alt=""
  /> `;

  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
  officia?`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  name.innerHTML = `John Doe`;
  date.innerHTML = `Aug, 23 2001`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_texts_bgs.forEach((bg) => bg.classList.remove("animated-text-bg"));
}
