const url = "https://api.pexels.com/v1/search?query=nature&per_page=1";
const apikey = "g220AzONbYiAHnTcyrxpkUIhbtTWa9HEooa9hA3cZNBEMAeHGXQGkyze";
const loadButton = document.querySelector(".btn-primary");
const cardImage = document.querySelectorAll(".card img");

const handleLoadImages = (e) => {
  e.preventDefault();

  fetch(url, {
    method: "GET",
    headers: {
      Authorization: apikey,
    },
  }).then((response) => response.json());
};
