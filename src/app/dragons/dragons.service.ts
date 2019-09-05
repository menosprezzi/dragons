import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dragon } from './dragons.types';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(
    @Inject('APP_ENVIRONMENT') private environment: any,
    private http: HttpClient
  ) { }

  list(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>(this.environment.dragonsApi);
  }

  delete(id): Observable<void> {
    return this.http.delete<void>(this.environment.dragonsApi + `/${id}`);
  }

  get(id): Observable<Dragon> {
    return this.http.get<Dragon>(this.environment.dragonsApi + `/${id}`);
  }

  create(dragon: Dragon) {
    return this.http.post(this.environment.dragonsApi, dragon);
  }

  save(dragon: Dragon) {
    return this.http.put(this.environment.dragonsApi + `/${dragon.id}`, dragon);
  }
}
