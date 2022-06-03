import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/models/movie.interface';

export interface OrderState {
  movies: MovieModel[];
}

@Injectable()
export class AppStore extends ComponentStore<OrderState> {
  constructor() {
    super({ movies: [] });
  }
  saveMovies = this.updater((state: OrderState, movies: MovieModel[]) => ({
    ...state,
    movies: [...movies, ...state.movies],
  }));
  movies$: Observable<MovieModel[]> = this.select((state) => state.movies);
}
