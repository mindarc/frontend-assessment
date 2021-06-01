import { Component, ViewChild } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import dataDetails from './data.json';

interface Data {
    title: String;
    content: String;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Angular';

    dataDisplay: Data[] = dataDetails;

    lastId = 'tab0';
    toggleTabs(event: { target: { id: string } }) {
        if (this.lastId === event.target.id) {
            this.lastId = 'tabgenesis';
            const ele = document.getElementById('tabgenesis') as HTMLInputElement;
            ele.checked = true;
        } else {
            this.lastId = event.target.id;
        }
    }
}
