import {pipesFactory} from "./pipes-factory.js";
import {_} from "framework";

export function applyPipe(pipeData, value) {
    let pipe = pipesFactory.getPipe(pipeData.name)
    if (_.isUndefined(pipe)) throw new Error(`${pipeData?.name} is not defined`);

    if (_.isUndefined(pipeData.args)) pipeData.args = []

    return pipe.transform(value, ...pipeData.args);

}