// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
// Services
import { JarvisService } from 'src/app/services/jarvis.service';
// Interfaces
import { Character } from 'src/app/interfaces/character.interface';
// Components
import { GenericErrorDialogComponent } from 'src/app/components/dialogs/generic-error-dialog/generic-error-dialog.component';
import { TeamFormDialogComponent } from 'src/app/components/dialogs/team-form-dialog/team-form-dialog.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  characters: Character[];
  searched: boolean = false;
  paginationOffset: number;

  scroll: Subscription;

  constructor(
    private readonly jarvisService: JarvisService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.scroll = this.jarvisService.scrolled.subscribe(() => {
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
      const dialogRef = this.dialog.open(TeamFormDialogComponent);

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    }
  }
  ngOnDestroy(): void {
    if (this.scroll) {
      this.scroll.unsubscribe();
    }
  }

  getLandingCharacters() {
    this.jarvisService.getLandingCharacters(this.paginationOffset).subscribe({
      next: (data) => {
        if (this.characters) {
          this.characters = [...this.characters, ...data];
        } else {
          this.characters = data;
        }
      },
      error: (error) => {
        console.log(error);
        this.dialog.open(GenericErrorDialogComponent);
      },
    });
  }

  searchCharacter(characterName: string) {
    this.jarvisService.searchCharacter(characterName).subscribe({
      next: (data) => {
        this.characters = data;
        this.searched = true;
      },
      error: (error) => {
        console.log(error);
        this.dialog.open(GenericErrorDialogComponent);
      },
    });
  }
}
