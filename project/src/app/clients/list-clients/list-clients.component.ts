import { Component, OnInit } from '@angular/core';

import { Client } from './../shared/client.model';

import { ClientService } from './../shared/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private ClientService: ClientService
  ) { }

  ngOnInit(): void {
    this.ClientService.getAllClients().subscribe(
      clients => this.clients = clients,
      error => alert('Erro ao carregar a página')
    )
  }

}
