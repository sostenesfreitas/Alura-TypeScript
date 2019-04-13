class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(v) {
        this._element.innerHTML = this.template(v);
    }
}
