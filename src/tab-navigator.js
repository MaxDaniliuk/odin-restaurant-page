import loadHomePage from './loadHomePage';
import loadContactsPage from './loadContactsPage';

export class TabNavigator {

    constructor() {
        loadHomePage();
        this.cacheDom();
        this.bindEvents();
    }

    cacheDom() {
        this.home = document.querySelector('.home');
        this.contacts = document.querySelectorAll('.contacts');
    }

    clearContent() {
        this.containers = [document.querySelector('.homepage'), document.querySelector('.contacts-page')];
        for (let i = 0; i < this.containers.length; i++) {
            if (this.containers[i] !== null && this.containers[i].length !== 0) {
                this.containers[i].remove();
            }
        }
    }

    bindEvents() {
        this.home.addEventListener('click', (e) => {
            if (!document.querySelector('.homepage')) this.recogniseButton(e);
        })
        this.contacts.forEach(button => {
            button.addEventListener('click', (e) => {
                if (!document.querySelector('.contacts-page')) this.recogniseButton(e);
            })
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
        }
    }

}
