import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from 'src/app/services/header-service/header.service';
import { AppStore } from 'src/app/store/app.store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  form: any;
  constructor(
    private headerService: HeaderService,
    private store: AppStore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.headerService.createForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.deleteMovies();
      this.headerService
        .searchMovies(this.form.value)
        .subscribe((data: any) => {
          data.results.forEach((movie: any) => {
            if (movie.poster_path !== null) {
              movie.poster_path = `${environment.imageUrl}${movie.poster_path}`;
            } else {
              movie.poster_path = 'assets/no-image.png';
            }
          });
          this.store.saveSearch(data.results);
          this.store.saveSearchHeader(this.form.value);
          this.store.switchFlag(true);
          this.router.navigate(['/search']);
        });
    } else {
      console.log(this.form.valid);
    }
  }
}
