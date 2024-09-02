import {WFMPipe} from "framework";

class AppMultiPipe extends WFMPipe {
    constructor(props) {
        super(props);
    }

}

export const appMultiPipe = new AppMultiPipe({
    name: 'multi',
    transform(value, number = 2) {
        return +value * number
    }
});