
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  let dogList = [];
  Object.keys(dogs).forEach(dog => {
    let anchor = document.createElement("a");
    anchor.href = dogs[dog];
    anchor.innerHTML = dog;
    let listItem = document.createElement("li");
    listItem.classList = "dog-link";
    listItem.appendChild(anchor);
    dogList.push(listItem);
    // dog is the dog name
    // dogs[dog] is the link
  });
  return dogList;
}

function attachDogLinks(){
  const dogLinks = dogLinkCreator(dogs);
  dogLinks.forEach((link) => {
    document.querySelector('.drop-down-dog-list').appendChild(link);
  });
}

const handleEnter = (e) => {
  //add code here to set display in-line block of li items
  //.drop-down-dog-list li remove hidden class
  // dogLists.classList.remove('hidden');
};

const handleLeave = (e) => {
  //add code here to set display none of li items
//.drop-down-dog-list li add hidden class
  // dogLists.classList.add('hidden');
};

const dogLists = document.querySelector('.drop-down-dog-list');
dogLists.addEventListener("mouseenter", handleEnter);
dogLists.addEventListener("mouseleave", handleLeave);

attachDogLinks();