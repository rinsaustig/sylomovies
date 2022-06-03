import { Component, OnInit, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { MovieModel } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbRatingConfig],
})
export class CardComponent implements OnInit {
  @Input() movie!: MovieModel;
  @Input() index: number = 0;
  constructor(private config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {}
}
