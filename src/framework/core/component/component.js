import {_} from "../../tools/util";

export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.el = null
    }

    render() {
        this.el = document.querySelector(this.selector);
        // document.querySelector(this.selector).innerHTML = this.template;
        if (!this.el) throw new Error("No component found for component " + this.selector);
        this.el.innerHTML = this.template

        initEvents.call(this)
    }
}

function initEvents() {
    if (_.isUndefined(this.events)) return

    let events = this.events()
    Object.keys(events).forEach(key => {
        let listener = key.split(' ')

        this.el
            .querySelector(listener[1])
            .addEventListener(listener[0], this[events[key]].bind(this))
    })
}