import {WFMComponent} from "framework";

class TabsPageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

    events() {
        return {
            'click .collapsible': 'onTabClick'
        }
    }

    onTabClick({target}) {
        if (!target.classList.contains('collapsible-header')) return

        this.el.querySelectorAll('.js-tab').forEach(e => e.classList.remove('active'))

        target.parentNode.classList.add('active')
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: "app-tabs-page",
    template: `
        <div class="row">
            <div class="col s6 offset-s3">
                <ul class="collapsible" style="margin-top: 30px;">
                    <li class="js-tab">
                      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li class="js-tab">
                      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li class="active js-tab">
                      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta doloremque eum laudantium nam necessitatibus repudiandae, sit veniam vero.</span></div>
                    </li>
                  </ul>
            </div>
        </div>
    `
});