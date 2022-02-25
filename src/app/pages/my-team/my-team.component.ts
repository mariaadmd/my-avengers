import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {
  myTeam: Character[];
  constructor(private readonly jarvisService: JarvisService) {}

  ngOnInit(): void {
    this.myTeam = this.jarvisService.getMyTeam();
  }

  addCharacter(character: any) {
    this.jarvisService.addCharacter(character);
  }

  deleteCharacter(character: any) {
    this.jarvisService.deleteCharacter(character);
    this.myTeam = this.jarvisService.getMyTeam();
  }
}
