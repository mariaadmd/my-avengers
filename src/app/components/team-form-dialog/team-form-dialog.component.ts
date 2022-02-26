import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-team-form-dialog',
  templateUrl: './team-form-dialog.component.html',
  styleUrls: ['./team-form-dialog.component.scss'],
})
export class TeamFormDialogComponent implements OnInit {
  teamForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    imagePath: new FormControl(null),
  });
  constructor(
    private readonly storage: StorageService,
    public dialogRef: MatDialogRef<TeamFormDialogComponent>
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.teamForm);
    const values = this.teamForm.value;

    const myTeamInfo = {
      name: values.name,
      description: values.description,
    };

    this.storage.set('myTeamInfo', myTeamInfo);
    this.dialogRef.close(myTeamInfo);
  }

  cancelDialog() {
    this.dialogRef.close();
  }
}
