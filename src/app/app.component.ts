import { Component } from '@angular/core';
import { JarvisService } from './services/jarvis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-avengers';

  constructor(private readonly jarvisService: JarvisService) {}
  onScroll() {
    this.jarvisService.onScroll();
  }
}
