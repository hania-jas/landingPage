const advantageSectionImages = document.querySelectorAll('.lightBackground');
const circleBackgrounds = document.querySelectorAll('.lightGreenBackground');
const leftArrow = document.querySelector('.flaticon-left-arrow');
const rightArrow = document.querySelector('.flaticon-right-arrow');

const firstDiv = document.querySelector('.firstBook')
const secondDiv = document.querySelector('.secondBook')
const thirdDiv = document.querySelector('.thirdBook')
const fourthDiv = document.querySelector('.fourthBook')

const bestsellersSection = document.querySelector('.bestsellersSection');

advantageSectionImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('changeColors');
        console.log(image);
    })
})

advantageSectionImages.forEach(image => {
    image.addEventListener('mouseout', () => {
        image.classList.remove('changeColors');
        console.log(image);
    })
})

const arrayOfBooks = ['images/book1.jpg', 'images/book2.jpg', 'images/book3.jpg', 'images/book4.jpg', 'images/book5.jpg', 'images/book6.jpg', 'images/book7.jpg', 'images/book8.jpg', 'images/book9.jpg', 'images/book10.jpg', 'images/book11.jpg'];
const clearDivs = () => {
    firstDiv.innerHTML = '';
    secondDiv.innerHTML = '';
    thirdDiv.innerHTML = '';
    fourthDiv.innerHTML = '';
}
const displayNextBook = () => {
    clearDivs();

    arrayOfBooks.push(arrayOfBooks[0]);
    arrayOfBooks.shift();

    let firstElem = document.createElement("IMG");
    let secondElem = document.createElement("IMG");
    let thirdElem = document.createElement("IMG");
    let fourthElem = document.createElement("IMG");

    firstElem.src = arrayOfBooks[0];
    secondElem.src = arrayOfBooks[1];
    thirdElem.src = arrayOfBooks[2];
    fourthElem.src = arrayOfBooks[3];

    firstDiv.appendChild(firstElem);
    secondDiv.appendChild(secondElem);
    thirdDiv.appendChild(thirdElem);
    fourthDiv.appendChild(fourthElem);
}
const displayPreviousBook = () => {
    clearDivs();

    let firstElem = document.createElement("IMG");
    let secondElem = document.createElement("IMG");
    let thirdElem = document.createElement("IMG");
    let fourthElem = document.createElement("IMG");

    firstElem.src = arrayOfBooks[arrayOfBooks.length - 1];
    secondElem.src = arrayOfBooks[0];
    thirdElem.src = arrayOfBooks[1];
    fourthElem.src = arrayOfBooks[2];

    firstDiv.appendChild(firstElem);
    secondDiv.appendChild(secondElem);
    thirdDiv.appendChild(thirdElem);
    fourthDiv.appendChild(fourthElem);

    arrayOfBooks.unshift(arrayOfBooks[arrayOfBooks.length - 1]);
    arrayOfBooks.pop();
    console.log(arrayOfBooks[arrayOfBooks.length - 1]);
}
rightArrow.addEventListener('click', displayNextBook);
leftArrow.addEventListener('click', displayPreviousBook);