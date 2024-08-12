import {_} from "framework";
import {renderComponent} from "./render-component";


export function initComponents(bootstrap, components) {
    if (_.isUndefined(bootstrap)) {
        throw new Error('bootstrap is defined');
    }
    [bootstrap, ...components].forEach(renderComponent)
}