import "./styles.scss";

const gallery = [
  {
    link: "https://place-puppy.com/300x150",
    src: "https://place-puppy.com/300x150",
    name: "All about pups",
    alt: "Puppy making somebody happy",
    ariaLabel: "Read more about Place Puppy"
  },
  {
    link: "http://placekitten.com/300/150",
    src: "http://placekitten.com/300/150",
    name: "Good miawrning",
    alt: "Cat staring prey",
    ariaLabel: "Read more about Place Kitten"
  },
  {
    link: "https://placedog.net/300/150",
    src: "https://placedog.net/300/150",
    name: "Woofnight ",
    alt: "Dog taking a nap after reading book",
    ariaLabel: "Read more about Place Dog"
  },
  {
    link: "https://placedog.net/300/150?random",
    src: "https://placedog.net/300/150?random",
    name: "Dogs just wanna have fun",
    alt: "Doggo playing with his ballo",
    ariaLabel: "Read more about Place Dog Random"
  },
  {
    link: "https://placeimg.com/300/150/animals",
    src: "https://placeimg.com/300/150/animals",
    name: "Animal corner",
    alt: "Random cute animal",
    ariaLabel: "Read more about Place Img"
  },
  {
    link: "https://placebear.com/300/150",
    src: "https://placebear.com/300/150",
    name: "Bear hugs",
    alt: "Bears having fun",
    ariaLabel: "Read more about Place Bear"
  }
];

const imageList = gallery
  .map(
    (image) =>
      `<a href=${image.link} aria-label="${image.ariaLabel}" class="image-wrapper" target="_blank" rel="noopener noreferrer"
      >
          <img src=${image.src} alt="${image.alt}" class="clickable-image" />
          ${image.name}
      </a>`
  )
  .join("\n");

document.getElementById("photo-roll").innerHTML = `${imageList}`;

var imgs = document.images;
var len = imgs.length;
var counter = 0;

[].forEach.call(imgs, function (img) {
  if (img.complete) incrementCounter();
  else img.addEventListener("load", incrementCounter, false);
});

function incrementCounter() {
  counter++;
  if (counter === len) {
    activateFlickity();
  }
}

var flkty = null;

function activateFlickity() {
  if (!flkty && window.innerWidth <= 1023) {
    flkty = new Flickity("#photo-roll", {
      contain: true,
      pageDots: false
    });
  } else if (flkty && window.innerWidth > 1023) {
    flkty.destroy();
    flkty = null;
  }
}

window.onresize = activateFlickity;
