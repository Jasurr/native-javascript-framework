import {_} from "../../tools/util";
import {$} from "../../tools/dom";
import {applyPipe} from "framework/core/pipes/apply-pipe";
import {parsePipe} from "framework/core/pipes/parse-pipe";

export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.styles = config.styles;
        this.el = null
    }

    render() {
        initStyles(this.styles)
        this.el = $(this.selector);
        if (!this.el) throw new Error("No component found for component " + this.selector);
        this.el.html(compileTemplate(this.template, this.data))
        initEvents.call(this)
    }
}

function initEvents() {
    if (_.isUndefined(this.events)) return

    let events = this.events()
    Object.keys(events).forEach(key => {
        let listener = key.split(' ')

        this.el
            .find(listener[1])
            .on(listener[0], this[events[key]].bind(this))

    })
}

function compileTemplate(template, data) {
    if (_.isUndefined(template)) return template

    let regex = /\{{(.*?)}}/g

    template = template.replace(regex, (str, d) => {
        let key = d.trim()
        let pipe

        if (hasPipe(key)) {
            pipe = parsePipe(key)
            key = getKeyFromPipe(key)
        }

        if (_.isUndefined(pipe))  return data[key]

        return applyPipe(pipe, data[key])

    })
    return template
}

function initStyles(styles) {
    if (_.isUndefined(styles)) return

    let style = $(document.createElement("style"))
    style.html(styles)
    $(document.head).append(style)

}

function hasPipe(key) {
    return key.includes('|')
}

function getKeyFromPipe(key) {
    return key.split('|')[0].trim()
}