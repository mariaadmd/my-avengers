import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;

  @Output() addCharacterEmitter: EventEmitter<Character> = new EventEmitter();
  @Output() deleteCharacterEmitter: EventEmitter<Character> =
    new EventEmitter();

  myTeam: Character[];
  isMine: boolean;

  constructor(private readonly jarvisService: JarvisService) {}

  ngOnInit(): void {
    this.myTeam = this.jarvisService.getMyTeam();

    this.isMine = this.myTeam.find(
      (teamCharacter) => teamCharacter.id === this.character.id
    )
      ? true
      : false;

    console.log(this.isMine);
  }

  addCharacter(): void {
    this.addCharacterEmitter.emit(this.character);
    this.isMine = true;
  }

  deleteCharacter(): void {
    this.deleteCharacterEmitter.emit(this.character);
    this.isMine = false;
  }
}
