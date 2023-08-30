import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* Atributos para cima */
  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  
  /* Array do ngFor */
  minhaLista = [
    {item: 'Feijão', quant: '2Kg'},
    {item: 'Leite', quant: '3 L'},
    {item: 'Batata', quant: '3 Kg'}
  ];

  /* Métodos para baixo */
  constructor() {}

}
