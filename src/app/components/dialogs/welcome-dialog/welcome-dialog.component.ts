import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
})
export class WelcomeDialogComponent implements OnInit {
  teamForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    imagePath: new FormControl(null),
  });
  constructor(
    private readonly storage: StorageService,
    public dialogRef: MatDialogRef<WelcomeDialogComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.teamForm);
    const values = this.teamForm.value;

    const myTeamInfo = {
      name: values.name,
      description: values.description,
    };

    this.storage.set('myTeamInfo', myTeamInfo);
    this.dialogRef.close();
  }
}
