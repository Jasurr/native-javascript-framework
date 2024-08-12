import {WFMComponent, $} from "framework";

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
        let $target = $(target);
        if (!$target.hasClass('collapsible-header')) return
        this.el.findAll('.js-tab').forEach(e => e.removeClass('active'))
        $target.parent().addClass('active');
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: "app-tabs-page",
    template: `
        <div class="row">
            <div class="col s6 offset-s3">
                <ul class="collapsible tab__container">
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
    `,
    styles: `
    .tab__container {margin-top: 30px;}
    .collapsible li.active .collapsible-body {
       display: block;
     }
    `
});