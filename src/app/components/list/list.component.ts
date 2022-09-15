import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meme } from 'src/app/util/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  memes$: Observable<Meme[]>;

  constructor(private data: DataService) {
    this.memes$ = this.data.getMemes();
    this.memes$.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
