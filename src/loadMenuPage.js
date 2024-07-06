import dishOne from './styles/images/dish-one.jpg';
import dishTwo from './styles/images/dish-two.jpg';
import dishThree from './styles/images/dish-three.jpg';

import { createParagraph, addImage } from './createElements';

export default function loadMenuPage() {
    const content = document.querySelector('#content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const imageSources = [dishOne, dishTwo, dishThree];
    const dishDescriptions = [
        `The meat is combined with an assortment of seasonings, 
        including classics such as Dijon mustard, capers, 
        egg yolk, onion, parsley, pickles, Worcestershire sauce, 
        Tabasco, salt, and freshly cracked black pepper`,
        `In the past, French village women would bake this dish in community ovens. 
        While no accompaniments are needed, it is recommended to make a sauce from the 
        delicious pan juices which should be combined with wine,
        stock, fresh herbs, and other aromatics`,
        `Crispy almond meringue that's topped with crunchy praline cream, usually consisting of melted chocolate,
        thin and crispy crêpe dentelle biscuits, and praline paste`
    ] 

    for (let i = 0; i < 3; i++) {
        const dishBlock = document.createElement('div');
        dishBlock.classList.add('dish-block');
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('dish-img-container');

        addImage(imgContainer, ['dish-img'], imageSources[i]);
        dishBlock.appendChild(imgContainer);
        createParagraph(dishBlock, dishDescriptions[i]);

        menuPage.appendChild(dishBlock);
    }

    content.appendChild(menuPage);
}