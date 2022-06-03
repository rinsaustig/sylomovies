import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.interface';

import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: MovieModel[] = [];

  constructor(private store: AppStore) {
    this.store.state$.subscribe((res) => {
      this.movies = res.movies;
      console.log('store2', this.movies);
    });
  }
  catch(err: any) {
    console.log(err);
  }

  ngOnInit(): void {}
}
