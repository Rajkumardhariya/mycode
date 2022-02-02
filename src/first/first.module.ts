import {FirstHome} from './first.component';
import {SharedModule} from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {
        path: '', component: FirstHome
    },
];

@NgModule({
    declarations: [
        FirstHome,
    ],
    entryComponents: [
        FirstHome,
    ],
    imports: [ 
        SharedModule,
        RouterModule.forChild(appRoutes),
    ],
})
export class FirstModule {
}