import { Component, OnInit } from '@angular/core';
import { JarvisService } from './services/jarvis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean;

  title = 'my-avengers';
  constructor(private readonly jarvisService: JarvisService) {}

  ngOnInit(): void {
    console.log('init');

    this.jarvisService.loading.subscribe(
      (state: any) => (this.loading = state)
    );
  }
}
