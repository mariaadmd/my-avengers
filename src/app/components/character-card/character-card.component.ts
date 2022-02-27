// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { JarvisService } from 'src/app/services/jarvis.service';
// Interfaces
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;

  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter();

  isMine: boolean;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.isMine = this.jarvisService.checkIsMine(this.character.id);
  }

  addCharacter(): void {
    if (this.jarvisService.checkLenght()) {
      let message =
        '¡Ups! ¡Tu equipo ya ha alcanzado el número máximo de héroes!';
      this.jarvisService.showToast(message);
    } else {
      this.jarvisService.addCharacter(this.character);
      this.isMine = true;
    }
  }

  deleteCharacter(): void {
    this.jarvisService.deleteCharacter(this.character);
    this.deleteEmitter.emit(this.character.id);
    this.isMine = false;
  }
  goToCharacterDetail() {
    this.router.navigate(['/character', this.character.id]);
  }
}
