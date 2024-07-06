import loadHomePage from './loadHomePage';
import loadContactsPage from './loadContactsPage';
import loadAboutUsPage from './loadAboutUsPage';
import loadMenuPage from './loadMenuPage';

export class TabNavigator {

    constructor() {
        loadHomePage();
        this.cacheDom();
        this.bindEvents();
    }

    cacheDom() {
        this.homeBtn = document.querySelector('.home');
        this.contactsBtn = document.querySelectorAll('.contacts');
        this.aboutUsBtn = document.querySelector('.about-us');
        this.menuBtn = document.querySelector('.menus');
    }

    clearContent() {
        this.containers = [
            document.querySelector('.homepage'), 
            document.querySelector('.contacts-page'), 
            document.querySelector('.about-us-page'),
            document.querySelector('.menu-page')
        ];
        for (let i = 0; i < this.containers.length; i++) {
            if (this.containers[i] !== null && this.containers[i].length !== 0) {
                this.containers[i].remove();
            }
        }
    }

    bindEvents() {
        this.homeBtn.addEventListener('click', (e) => {
            if (!document.querySelector('.homepage')) this.recogniseButton(e);
        })
        this.contactsBtn.forEach(button => {
            button.addEventListener('click', (e) => {
                if (!document.querySelector('.contacts-page')) this.recogniseButton(e);
            })
        })
        this.aboutUsBtn.addEventListener('click', (e) => {
            if (!document.querySelector('.about-us-page')) this.recogniseButton(e);
        })
        this.menuBtn.addEventListener('click', (e) => {
            if (!document.querySelector('.menu-page')) this.recogniseButton(e);
        })
    }

    rebindEvents() {
        document.querySelector('.repopulated-contacts-btn').
        addEventListener('click', () => {
            this.clearContent();
            loadContactsPage();
        })
    }

    recogniseButton(e) {
        this.clearContent();
        if(e.target.classList.contains('home')) {
            loadHomePage();
            this.rebindEvents();
        } else if (e.target.classList.contains('contacts')) {
            loadContactsPage();
        } else if (e.target.classList.contains('about-us')) {
            loadAboutUsPage();
        } else if (e.target.classList.contains('menus')) {
            loadMenuPage();
        }
    }

}
