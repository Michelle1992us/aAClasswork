
const partyHeader = document.getElementById('party');
const welcome = document.getElementsByClassName('welcome');

export const htmlGenerator = (string, htmlElement) => {

  if (htmlElement.hasChildNodes() === true){
    while (htmlElement.firstChild) {
      htmlElement.removeChild(htmlElement.firstChild);
    }
  }

    let element = document.createElement("p");
    element.innerText = string;
    htmlElement.appendChild(element);
    
};

htmlGenerator('Party Time.', partyHeader);

