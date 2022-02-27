// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Components
import { TeamFormDialogComponent } from 'src/app/components/dialogs/team-form-dialog/team-form-dialog.component';
// Services
import { JarvisService } from 'src/app/services/jarvis.service';
// Interfaces
import { Character } from 'src/app/interfaces/character.interface';
import { TeamInfo } from 'src/app/interfaces/team.interface';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {
  myTeam: Character[];
  myTeamInfo: TeamInfo;
  constructor(
    private readonly jarvisService: JarvisService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myTeam = this.jarvisService.getMyTeam();
    this.myTeamInfo = this.jarvisService.getMyTeamInfo();
  }

  editTeamInfo(): void {
    const dialogRef = this.dialog.open(TeamFormDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.myTeamInfo = result;
      }
    });
  }

  deleteCharacter(characterId: number): void {
    this.myTeam = this.myTeam.filter(
      (teamCharacter) => teamCharacter.id !== characterId
    );
  }
}
