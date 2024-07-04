import { createParagraph } from "./createElements";

function loadHomePage() {
    const content = document.querySelector('#content');

    const homePage = document.createElement('div');
    homePage.classList.add('homepage');

    const description = document.createElement('div');
    description.classList.add('description');

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('home-btns-container');

    createParagraph(description, 'Somewhere in the heart of Paris');
    createParagraph(description, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum pariatur, est temporibus perspiciatis nesciunt vero? Quam, aspernatur error eos alias doloribus, aliquam laborum delectus dolorem quidem possimus mollitia ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati, cum consequuntur eius et dolorem dicta, voluptas voluptates delectus, ab enim architecto nostrum tenetur? Enim quis neque sequi dolorem assumenda.');

    createMainContactsBtn(btnsContainer, 'CONTACT US');
    createMainContactsBtn(btnsContainer, 'BOOK A TABLE');

    homePage.appendChild(description);
    homePage.appendChild(btnsContainer);

    content.appendChild(homePage);
}

function createMainContactsBtn(container, innerText) {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'home-btn');
    btn.innerHTML = innerText;
    if (btn.innerHTML === 'CONTACT US') {
        btn.classList.add('contacts' ,'repopulated-contacts-btn')
    }
    container.appendChild(btn);
}

export default loadHomePage;