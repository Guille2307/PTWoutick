import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  apiUrl =
    'https://api.unsplash.com/search/photos/?client_id=lCnyUpc6ayFjXOO6DPF-_K6NkC1EKeGOjJ5wwzEvk40&';
  termino = '';
  apiUrlDetail = 'https://api.unsplash.com/photos/';
  id: string;
  client = 'lCnyUpc6ayFjXOO6DPF-_K6NkC1EKeGOjJ5wwzEvk40';

  constructor(private http: HttpClient) {}

  getImages(termino: string) {
    return this.http.get(`${this.apiUrl}query=${termino}&per_page=20`);
  }
  getImageDetail(id: string) {
    return this.http.get(`${this.apiUrlDetail}/${id}?client_id=${this.client}`);
  }
}
