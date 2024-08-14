import {homePageComponent} from "./pages/home-page.component";
import {tabsPageComponent} from "./pages/tabs-page.component";
import {notFound} from "./shared/app.not-found";
import {directivePageComponent} from "./pages/directive-page.component";

const appRoutes = [
    {path: '', component: homePageComponent},
    {path: 'tabs', component: tabsPageComponent},
    {path: 'directive', component: directivePageComponent},
    {path: '**', component: notFound},
]


export default appRoutes