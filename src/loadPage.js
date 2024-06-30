function loadPage() {
    const content = document.querySelector('#content');

    const description = document.createElement('div');
    description.classList.add('description');

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('content-btns');

    createParagraph(description, 'Somewhere in the heart of Paris');
    createParagraph(description, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum pariatur, est temporibus perspiciatis nesciunt vero? Quam, aspernatur error eos alias doloribus, aliquam laborum delectus dolorem quidem possimus mollitia ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati, cum consequuntur eius et dolorem dicta, voluptas voluptates delectus, ab enim architecto nostrum tenetur? Enim quis neque sequi dolorem assumenda.');

    createButton(btnsContainer, 'CONTACT US');
    createButton(btnsContainer, 'BOOK A TABLE');

    content.appendChild(description);
    content.appendChild(btnsContainer);
}

function createParagraph(container, innerText) {
    const p = document.createElement('p');
    p.innerHTML = innerText;
    container.appendChild(p);
}

function createButton(container, innerText) {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'content-btn');
    btn.innerHTML = innerText;
    container.appendChild(btn);
}

export default loadPage;