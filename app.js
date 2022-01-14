// Select the section with an id of container without using querySelector.
const container = document.getElementById('container');
console.log(container);

// Select the section with an id of container using querySelector.
const newContainer = document.querySelector('#container');
console.log(newContainer);

// Select all of the list items with a class of “second”.
const second = document.querySelectorAll('.second');
console.log(second);

// Select a list item with a class of third, but only the list item inside of the ol tag.
const ol = document.querySelector('ol');
const lis = ol.children;
const third = lis[2];
console.log(third);

// Give the section with an id of container the text “Hello!”.
const hello = document.createElement('h1');
hello.innerText = 'Hello!';
container.prepend(hello);

// Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');
console.log(footer);

// Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// Create a new li element.
const newLi = document.createElement('li');

// Give the li the text “four”.
newLi.innerText = 'four';
console.log(newLi);

// Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
for (let li of lis) {
	li.style.backgroundColor = 'green';
}

// Remove the div with a class of footer
footer.remove();
