import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServciesService {

  private getUser = 'https://zv81r2ct4d.execute-api.us-east-1.amazonaws.com/dev/api/users';
  private UserId = 'https://zv81r2ct4d.execute-api.us-east-1.amazonaws.com/dev/api/users/creditos';
  private Banco = 'https://zv81r2ct4d.execute-api.us-east-1.amazonaws.com/dev/api/users/banco/123456';
  private usuarioEstado = 'https://zv81r2ct4d.execute-api.us-east-1.amazonaws.com/dev/api/users/aprobados';
  private solicitud = 'https://zv81r2ct4d.execute-api.us-east-1.amazonaws.com/dev/api/user';
  private pagar = 'https://zv81r2ct4d.execute-api.us-east-1.amazonaws.com/dev/api/users/estado';

  constructor(private  http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.getUser}`);
  }


   getUserId(Id): Observable<any> {
     return this.http.get(`${this.UserId}/${Id}`);
   }

  getBanco(): Observable<any> {
    return this.http.get(`${this.Banco}`);
  }

  getUsuarioEstado(aprobados): Observable<any> {
    return this.http.get(`${this.usuarioEstado}/${aprobados}`);
  }

  enviarSolicitus(data): Observable<any> {
    return this.http.post(`${this.solicitud}`, data);
  }

  pagarCredito(data): Observable<any> {
    return this.http.post(`${this.pagar}`, data);
  }


}
