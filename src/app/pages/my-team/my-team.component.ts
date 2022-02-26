import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { MatDialog } from '@angular/material/dialog';
import { TeamFormDialogComponent } from 'src/app/components/team-form-dialog/team-form-dialog.component';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {
  myTeam: Character[];
  myTeamInfo: any;
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
      console.log(result);

      if (result) {
        this.myTeamInfo = result;
      }
    });
  }

  addCharacter(character: any) {
    this.jarvisService.addCharacter(character);
  }

  deleteCharacter(characterId: number) {
    this.myTeam = this.myTeam.filter(
      (teamCharacter) => teamCharacter.id !== characterId
    );
  }
}
