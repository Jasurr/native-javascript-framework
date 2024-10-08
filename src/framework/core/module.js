import {initComponents} from "framework/core/component/init-component";
import {initRouting} from "./routing/init-routing.js";
import {initDirectives} from "framework/core/directives/init-directives";
import {EventEmitter} from "framework";
import {initPipes} from "framework/core/pipes/init-pipes";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
        this.directives = config.directives
        this.pipes = config.pipes
        this.dispatcher = new EventEmitter()
    }

    start() {
        initPipes(this.pipes)
        initComponents(this.bootstrapComponent, this.components)
        initRouting(this.routes, this.dispatcher)
        initDirectives(this.directives)

        this.dispatcher.on('routing.change-page', () => {
            initDirectives(this.directives)
        })
    }
}