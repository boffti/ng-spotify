import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId:'moduleId',
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SpotifyService]
})
export class AppComponent {

}
