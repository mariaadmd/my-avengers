import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from 'src/app/components/dialogs/welcome-dialog/welcome-dialog.component';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { StorageService } from 'src/app/services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericErrorDialogComponent } from 'src/app/component/dialogs/generic-error-dialog/generic-error-dialog.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  characters: Character[];
  searched: boolean = false;
  paginationOffset: number;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.jarvisService.scrolled.subscribe(() => {
      if (!this.searched && this.characters) {
        this.paginationOffset += 25;
        this.getLandingCharacters();
      }
    });

    if (this.jarvisService.checkTeam()) {
      this.paginationOffset = 0;
      this.jarvisService.getMyTeam();
      this.getLandingCharacters();
    } else {
      const dialogRef = this.dialog.open(WelcomeDialogComponent);

      dialogRef.afterClosed().subscribe((result) => {
        this.ngOnInit();
      });
    }
  }

  getLandingCharacters() {
    this.jarvisService.getLandingCharacters(this.paginationOffset).subscribe(
      (data) => {
        console.log(data);
        if (this.characters) {
          this.characters = [...this.characters, ...data.data.results];
        } else {
          this.characters = data.data.results;
        }
      },
      (error) => {
        this.dialog.open(GenericErrorDialogComponent);
      }
    );
  }

  searchCharacter(characterName: any) {
    console.log('searchCharacter');

    this.jarvisService.searchCharacter(characterName).subscribe((data) => {
      console.log(data);
      this.characters = data;
      this.searched = true;
    });
  }
}
