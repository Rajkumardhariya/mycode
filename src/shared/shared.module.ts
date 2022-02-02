import {TestDirective} from './test.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        TestDirective,
    ],
    exports: [ 
        TestDirective,
    ],
})
export class SharedModule {
}