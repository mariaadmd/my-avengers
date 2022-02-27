import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchTerm: EventEmitter<string> = new EventEmitter();

  characterName: string;

  constructor() {}

  ngOnInit(): void {}

  search(): void {
    this.searchTerm.emit(this.characterName);
  }
}
