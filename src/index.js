import {bootstrap} from "./framework";
import {appModule} from "./app/app.module";
import {wfm} from './framework/index.js'

wfm.delay().then(() => {
    bootstrap(appModule)
})
