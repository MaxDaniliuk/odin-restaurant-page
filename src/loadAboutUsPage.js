import { createParagraph } from "./createElements";

export default function loadAboutUsPage() {
    const content = document.querySelector('#content');

    const aboutUsPage = document.createElement('div');
    aboutUsPage.classList.add('about-us-page');

    createParagraph(aboutUsPage, 'We are opening soon!!');

    content.appendChild(aboutUsPage);
}