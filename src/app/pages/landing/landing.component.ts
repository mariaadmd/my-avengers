import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from 'src/app/components/welcome-dialog/welcome-dialog.component';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  characters: Character[];
  searched: boolean = false;
  paginationOffset: number = 0;

  constructor(
    private readonly jarvisService: JarvisService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.jarvisService.checkTeam()) {
      this.jarvisService.getMyTeam();
    } else {
      const dialogRef = this.dialog.open(WelcomeDialogComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
        this.ngOnInit();
      });
    }

    this.jarvisService.getMyTeam();
    this.getLandingCharacters();
  }

  getLandingCharacters() {
    console.log(this.paginationOffset);

    this.jarvisService
      .getLandingCharacters(this.paginationOffset)
      .subscribe((data) => {
        console.log(data);
        if (this.characters) {
          this.characters = [...this.characters, ...data.data.results];
        } else {
          this.characters = data.data.results;
        }
      });
  }

  onScroll(): void {
    if (!this.searched) {
      this.paginationOffset += 25;
      this.getLandingCharacters();
    }
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
