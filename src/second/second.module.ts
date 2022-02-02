import {SecondHome} from './second.component';
import {SharedModule} from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {
        path: '', component: SecondHome
    },
];

@NgModule({
    declarations: [
        SecondHome,
    ],
    imports: [ 
        SharedModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class SecondModule {
}