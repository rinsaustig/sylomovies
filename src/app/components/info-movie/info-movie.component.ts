import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

import { MovieModel } from 'src/app/models/movie.interface';
import { SingleMovieService } from 'src/app/services/single-movie/single-movie.service';
import { AppStore } from 'src/app/store/app.store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss'],
})
export class InfoMovieComponent implements OnInit {
  cast!: any[];
  movie!: MovieModel;
  constructor(
    private store: AppStore,
    private router: Router,
    private singleMovie: SingleMovieService,
    private config: NgbRatingConfig
  ) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.initialice();
  }

  initialice() {
    this.store.state$.subscribe((res) => {
      let movie = res.movieSelected;
      if (movie == null) {
        this.router.navigate(['/']);
      } else {
        this.singleMovie.getMovieDetails(movie.id).subscribe((data: any) => {
          this.movie = data;
          this.movie.poster_path = `${environment.imageUrl}${this.movie.poster_path}`;
        });
        this.singleMovie.getCast(movie.id).subscribe((data: any) => {
          this.cast = Array.from(data.cast);
          this.cast = this.cast.filter((c) => c.profile_path != null);
          this.cast.forEach((c) => {
            c.profile_path = `${environment.imageUrl}${c.profile_path}`;
          });
        });
      }
    });
  }
  catch(err: any) {
    console.log(err);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
