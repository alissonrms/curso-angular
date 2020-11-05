import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import { Client } from './client.model'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiURL: string = '192.168.0.107:8080/api';
  

  constructor(
    private http: HttpClient
  ) { }

  getAllClients(): Observable<Client[]>{
    return this.http.get(`http://${this.apiURL}/clientes`).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    )
  }

  getClientById(codCliente: number): Observable<Client> {
    const url = `${this.apiURL}/${codCliente}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)      
    )
  }

  createClient(resource: Client): Observable<Client> {
    return this.http.post(this.apiURL, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    )
  }

  updateClient(resource: Client): Observable<Client> {
    const url = `${this.apiURL}/${resource.codCliente}`;

    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    )
  }

  deleteClient(codCliente: number): Observable<any> {
    const url = `${this.apiURL}/${codCliente}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    )
  }



  protected jsonDataToResources(jsonData: any[]): Client[] {
    const clients: Client[] = [];
    jsonData.forEach(element => clients.push(element as Client));
    return clients
  }

  protected jsonDataToResource(jsonData: any): Client {
    return jsonData as Client;
  }

  protected handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }


}
