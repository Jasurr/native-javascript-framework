import {router, WFMComponent} from "framework";

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config);
        this.data = {
            title: 'Asosiy menu ishlayapti',
            linkTitle: 'Boshqa sahifaga o\'tish',
        }
    }

    events() {
        return {
            'click .js-link': 'goToTabs',
        }
    }

    onInit() {
        console.log('Component init');
    }

    afterInit() {
        console.log('Component after init');
    }

    goToTabs(e) {
        e.preventDefault();
        router.navigate('tabs');
    }
}

export const homePageComponent = new HomePageComponent({
    selector: "app-home-page",
    template: `
        <div class="row">
            <div class="col s6 offset-s3 home__block">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{{ title }}</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, modi!</p>
                </div>
                <div class="card-action">
                  <a href="#" class="js-link">{{linkTitle}}</a>
                </div>
              </div>
            </div>
      </div>
    `,
    styles: `
       .home__block {margin-top: 40px;}
    `
});