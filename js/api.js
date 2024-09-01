const api_key = "qJsdEhgxPj4vcnCGHb0kjndBit1Ku2RTehYfNRBH";

async function getImageOfTheDay() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
  );
  const data = await response.json();

  const image = document.getElementById("image");
  image.src = data.url;
}

getImageOfTheDay();
