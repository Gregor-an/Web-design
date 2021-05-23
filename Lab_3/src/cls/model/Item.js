export default class Item {
    constructor(title) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.title = title;
        this.done = false;
    }

    toggleDone() { 
        this.done = !this.done; 
    }

    changeTitle(title) {
        this.title = title;
    }
}