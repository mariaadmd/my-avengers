import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-error-dialog',
  templateUrl: './generic-error-dialog.component.html',
  styleUrls: ['./generic-error-dialog.component.scss'],
})
export class GenericErrorDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reload() {
    window.location.reload();
  }
}
