import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/models/movie.interface';

export interface OrderState {
  movies: MovieModel[];
  movieSelected: MovieModel | null;
  search: MovieModel[];
  flag: boolean;
  header: string;
}

@Injectable()
export class AppStore extends ComponentStore<OrderState> {
  constructor() {
    super({
      movies: [],
      movieSelected: null,
      search: [],
      flag: false,
      header: '',
    });
  }
  saveMovies = this.updater((state: OrderState, movies: MovieModel[]) => ({
    ...state,
    movies: [...movies, ...state.movies],
  }));

  switchFlag = this.updater((state: OrderState, flag: boolean) => ({
    ...state,
    flag: flag,
  }));

  saveSearchHeader = this.updater((state: OrderState, header: string) => ({
    ...state,
    header: header,
  }));

  saveSearch = this.updater((state: OrderState, search: MovieModel[]) => ({
    ...state,
    search: [...search, ...state.search],
  }));

  deleteMovies = this.updater((state: OrderState) => {
    let searchCopy = [...state.search];
    searchCopy.splice(0, searchCopy.length);
    return {
      ...state,
      search: searchCopy,
    };
  });

  saveMovieSelected = this.updater((state: OrderState, movie: MovieModel) => ({
    ...state,
    movieSelected: movie,
  }));
  flag$ = this.select((state) => state.flag);
  header$ = this.select((state) => state.header);
  movies$: Observable<MovieModel[]> = this.select((state) => state.movies);
  movieSelected$: Observable<MovieModel | null> = this.select(
    (state) => state.movieSelected
  );
}
