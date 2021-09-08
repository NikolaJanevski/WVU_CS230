import { Component } from "@angular/core";

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: './top-nav-bar.component.html'
})
export class TopNavBarComponent {
    title:string = "Spotify App 1"
    currentlyPlaying:string = "I can't stop the rain"
}