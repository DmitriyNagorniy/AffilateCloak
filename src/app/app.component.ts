import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    step = 1;
    userName = '';
    userAge = '';
    userCountry = '';

    nextStep(): void {
        this.step += 1;
    }
}
