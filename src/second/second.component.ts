import { Component } from "@angular/core";

@Component({
    selector: 'second-home',
    template: '<div test-directive>This is Second Component</div><button routerLink="">Home</button>',
})
export class SecondHome {
}