import {WFMComponent} from "framework";


class AppNotFound extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const notFound = new AppNotFound({
    selector: "app-not-found",
    template: `
       <div class="not-found__countainer">
            <div class="red darken-1">
                <h2>Bu sahifa topilmadi</h2>
                <a href="#">Asosiy menuga qaytish</a>
            </div>
        </div>
    `,
    styles: `
     .not-found__countainer {display: flex; align-items: center; justify-content: center;}
    `
});