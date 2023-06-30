import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  xpURL = 'https://localhost:8080/explab'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.xpURL+'/lista');
  }

  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.xpURL+`/detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.xpURL+ `/create`,experiencia);

  }
  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.xpURL+`/update/${id}`,experiencia);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.xpURL+`/delete/${id}`);
  }
}
