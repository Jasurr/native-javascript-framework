import {_} from "framework";
import {pipesFactory} from "./pipes-factory";

export function initPipes(pipes) {
    if (_.isUndefined(pipes)) return

    pipes.forEach( p => pipesFactory.registerPipe(p))
}