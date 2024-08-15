const apiId = "😄";
const movie_name = document.getElementById("search-movie");
const continous = document.getElementById("search-movie").value;
const search = document.getElementById("icon");

// Paginations
let currentPage = 1;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pageNumber = document.getElementById("pagenumber");

search.addEventListener("click", () => {
  // Empty box message
  document.querySelector(".empty-box").style.display = "none";

  // Page number
  document.getElementById("showpage").removeAttribute("id");

  // creating slug of input value
  const slug = movie_name.value.trim().replaceAll(" ", "+");
  const main = document.getElementById("main");

  // calling getMovies function
  getMovies(slug, 1);

  // Clearing the previous movies
  if (main.childNodes.length > 0) {
    let ele = document.querySelectorAll(".card");
    for (let i = 0; i < ele.length; i++) {
      main.removeChild(ele[i]);
    }
  }
  movie_name.value = ""; // clearing the input box

  // Paginations functions
  prev.addEventListener("click", () => {
    if (currentPage > 1) {
      getMovies(slug, (currentPage -= 1));
      pageNumber.innerHTML = currentPage;
    }
  });
  next.addEventListener("click", () => {
    getMovies(slug, (currentPage += 1));
    pageNumber.innerHTML = currentPage;
  });
});

const getMovies = async (slug, pageNumber) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${slug}&apikey=${apiId}&page=${pageNumber}`
    );
    const data = await res.json();
    const main = document.getElementById("main");
    if (main.childNodes.length > 0) {
      let ele = document.querySelectorAll(".card");
      for (let i = 0; i < ele.length; i++) {
        main.removeChild(ele[i]);
      }
    }
    for (let i = 0; i < data?.Search?.length; i++) {
      const newOne = document.createElement("div");
      newOne.classList.add(`card`);
      newOne.id = `${data.Search[i]?.imdbID}`;
      newOne.innerHTML = ` <div class="poster-img">
        <img
        src= ${data.Search[i]?.Poster}
        alt="movie poster"
        />
        </div>
        <div class="movie-details">
        <h3 class="movie-title">${data.Search[i]?.Title}</h3>
        <p class="movie-year">Year : ${data.Search[i]?.Year}</p>
        </div>
        <div id="view-more">
        <p id="extra">View More</p>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        id="right-arrow"
        viewBox="0 0 25 25"
        >
        <path
            style="fill: #232326"
            d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
            data-name="Right"
        />
        </svg>
        </div>`;

      main.appendChild(newOne);
    }
  } catch (error) {
    console.log(`unable to fetch data ${error.message}`);
  }
};

// extra detail of any movie on click
const main = document.getElementById("main");
main.addEventListener("click", (e) => {
  if (e.target.parentElement.id === "view-more") {
    const mainId = e.target.parentElement.parentElement.id;
    // calling getDeatils function with id of espacific movie
    getDeatils(mainId);
    document
      .querySelector(".complete-detail")
      .setAttribute("class", "complete-detail");
  }
});

// clossing the extra detail box
const cross = document.querySelector(".complete-detail");
cross.addEventListener("click", (e) => {
  if (e.target.id === "cross-icon") {
    document
      .querySelector(".complete-detail")
      .setAttribute("class", "complete-detail box");
  }
});

const getDeatils = async (id) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiId}`);
    const data = await res.json();
    document.getElementById("movie-box-poster").src = data?.Poster;
    document.getElementById(
      "title"
    ).innerHTML = `<span class="bold">Title : </span> ${data.Title}`;
    document.getElementById(
      "year"
    ).innerHTML = `<span class="bold">Year : </span> ${data.Year}`;
    document.getElementById(
      "rated"
    ).innerHTML = `<span class="bold">IMDB Rating : </span> ${data.imdbRating}`;
    document.getElementById(
      "released"
    ).innerHTML = `<span class="bold">Released : </span> ${data.Released}`;
    document.getElementById(
      "runtime"
    ).innerHTML = `<span class="bold">Runtime : </span> ${data.Runtime}`;
    document.getElementById(
      "genre"
    ).innerHTML = `<span class="bold">Genre : </span> ${data.Genre}`;
    document.getElementById(
      "director"
    ).innerHTML = `<span class="bold">Director : </span> ${data.Director}`;
    document.getElementById(
      "writers"
    ).innerHTML = `<span class="bold">Writers : </span> ${data.Writers}`;
    document.getElementById(
      "Actors"
    ).innerHTML = `<span class="bold">Actors : </span> ${data.Actors}`;
    document.getElementById(
      "Plot"
    ).innerHTML = `<span class="bold">Plot : </span> ${data.Plot}`;
    document.getElementById(
      "Language"
    ).innerHTML = `<span class="bold">Language : </span> ${data.Language}`;
    document.getElementById(
      "Country"
    ).innerHTML = `<span class="bold">Country : </span> ${data.Country}`;
    document.getElementById(
      "Awards"
    ).innerHTML = `<span class="bold">Awards : </span> ${data.Awards}`;
  } catch (error) {
    console.log(`Unable to get detail ${error.message}`);
  }
};

// footer
const year = document.getElementById("copy");
year.innerHTML = new Date().getFullYear();
