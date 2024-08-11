export class Component {
    constructor (config) {
        this.template = config.template;
        this.selector = config.selector;
        this.el = null
    }

    render() {
        this.el = document.querySelector(this.selector);
        // document.querySelector(this.selector).innerHTML = this.template;
        if (!this.el) throw new Error("No component found for component " + this.selector);
        this.el.innerHTML = this.template
    }
}