// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// Services
import { JarvisService } from 'src/app/services/jarvis.service';
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
  });

  firstTime: boolean;
  constructor(
    private readonly storage: StorageService,
    private readonly jarvisService: JarvisService,
    public dialogRef: MatDialogRef<TeamFormDialogComponent>
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.jarvisService.checkTeam()) {
      const info = this.jarvisService.getMyTeamInfo();
      this.teamForm.patchValue({
        name: info.name,
        description: info.description,
      });
    } else {
      this.firstTime = true;
    }
  }

  onSubmit(): void {
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
