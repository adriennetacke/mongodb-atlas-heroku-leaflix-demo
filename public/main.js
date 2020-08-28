function run() {
  fetch("/api/movie")
    .then((response) => response.json())
    .then((data) => {
      const detailsElement = document.getElementById("movie");

      detailsElement.getElementsByTagName("img")[0].src = data.poster;
      detailsElement.getElementsByTagName("h1")[0].innerText = data.title;
      detailsElement.getElementsByTagName("p")[0].innerText = data.fullplot;

      detailsElement.style.visibility = "visible";
    });
}