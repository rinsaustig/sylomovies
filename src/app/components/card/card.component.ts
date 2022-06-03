import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie!: MovieModel;
  @Input() index: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
