import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { MovieModel } from 'src/app/models/movie.interface';

import { CarouselServiceService } from 'src/app/services/carousel-service.service';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  movies: MovieModel[] = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  constructor(
    private carouselService: CarouselServiceService,
    private store: AppStore
  ) {}

  ngOnInit(): void {
    this.carouselInit();
  }

  carouselInit() {
    this.carouselService.getNowPlaying().subscribe((data) => {
      this.movies = data.results;
      this.movies.map((element: any) => {
        element.poster_path = `https://image.tmdb.org/t/p/original${element.poster_path}`;
      });
      this.store.saveMovies(this.movies);
    });
  }
  catch(err: any) {
    console.log(err);
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
