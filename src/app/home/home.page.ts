import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produto.model';
import { DatabaseService } from '../servico/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  /* Atributos para cima */
  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  
  /* Array do ngFor */
  /* Produtos é o meu molde */
  minhaLista:Produtos[] = [];

  /* Métodos para baixo */
  constructor(
    /* Nosso serviço de banco de dados */
    private bancoDados: DatabaseService
    ) {}
    
  ngOnInit(): void {
    
  }

}
