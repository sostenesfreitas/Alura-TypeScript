abstract class View<T> {
    
    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    update(v: T){
        this._element.innerHTML = this.template(v);
    }

    abstract template(v: T) :string
}