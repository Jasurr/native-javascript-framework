import {WFMComponent} from "framework";

class PipePageComponent extends WFMComponent {
    constructor(config) {
        super(config);

        this.data = {
            number: 10
        }
    }


}

export const pipePageComponent = new PipePageComponent({
    selector: "app-directive-page",
    template: `
        <div class="row">
            <div class="col s6 offset-s3 dir__block">
              <h4 appHover="red" >{{ number }}</h4>
              <h4 appHover="red" >{{ number | multi }}</h4>
              <h4 appHover="red" >{{ number | multi:5 }}</h4>
            </div>
      </div>
    `,
    styles: `
    .dir__block:{ margin-top: 30px; }
    `
});