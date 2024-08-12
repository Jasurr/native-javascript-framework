import {initComponents} from "framework/core/component/init-component";
import {initRouting} from "./routing/init-routing.js";

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