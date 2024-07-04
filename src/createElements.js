export function createParagraph(container, innerText) {
    const p = document.createElement('p');
    p.innerHTML = innerText;
    container.appendChild(p);
}

export function addImage(container, classList, imageSource) {
    const image = document.createElement('img');
    image.classList.add(...classList);
    container.appendChild(image);
    image.src = imageSource;
}