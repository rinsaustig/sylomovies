import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  constructor(private store: AppStore) {}

  ngOnInit(): void {
    this.initialice();
  }

  initialice() {
    this.store.state$.subscribe((res) => {
      console.log(res.search);
    });
  }
}
