import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/models/movie.interface';

export interface OrderState {
  movies: MovieModel[];
  movieSelected: MovieModel | null;
}

@Injectable()
export class AppStore extends ComponentStore<OrderState> {
  constructor() {
    super({ movies: [], movieSelected: null });
  }
  saveMovies = this.updater((state: OrderState, movies: MovieModel[]) => ({
    ...state,
    movies: [...movies, ...state.movies],
  }));

  saveMovieSelected = this.updater((state: OrderState, movie: MovieModel) => ({
    ...state,
    movieSelected: movie,
  }));
  movies$: Observable<MovieModel[]> = this.select((state) => state.movies);
  movieSelected$: Observable<MovieModel | null> = this.select(
    (state) => state.movieSelected
  );
}
