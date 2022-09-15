import { Meme } from './../util/interfaces';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getMemes() {
    return this.http
      .get<Meme[]>(`${environment.strapiUrl}/api/memes?populate=*`)
      .pipe(
        map((res: any) => {
          console.log('data: ', res.data);
          return res.data;
        }),
        map((memes: Meme[]) => {
          return memes.map((meme) => {
            meme.attributes.image.data.attributes.url = `${environment.strapiUrl}${meme.attributes.image.data.attributes.url}`;
            return meme;
          });
        })
      );
  }
}
