import { Component, OnInit } from '@angular/core';
import { JarvisService } from 'src/app/services/jarvis.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  loading: boolean;

  constructor(private readonly jarvisService: JarvisService) {}

  ngOnInit(): void {
    this.jarvisService.loading.subscribe(
      (state: any) => (this.loading = state)
    );
  }
}
