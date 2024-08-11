import {router as routes, router} from "./routing/router";
import {_} from "../tools/util";
import {renderComponent} from "framework/core/component/render-component";
import {bootstrap} from "framework";
import {RoutingModule} from "framework/core/routing/routing.module";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start() {
        initComponents(this.bootstrapComponent, this.components)
        initRouting(this.routes)
    }

}

function initComponents(bootstrap, components) {
    if (_.isUndefined(bootstrap)) {
        throw new Error('bootstrap is defined');
    }
    [bootstrap, ...components].forEach(renderComponent)
}

function initRouting(routes) {
    if (_.isUndefined(routes)) return

    let routing = new RoutingModule(routes)
    routing.init()
}