import {WFMComponent} from "framework";


class AppHeader extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: "app-header",
    template: `
        <nav class="indigo">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo logo__brand">Native Framework</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Asosiy</a></li>
            <li><a href="#tabs">Tablar</a></li>
          </ul>
        </div>
      </nav>
    `,
    styles: `
    .logo__brand {margin-left: 20px;}
    `
});