import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipem = new Recipe('Dummy', 'Dummy', 'assets/img/brezel.png');

  constructor() { }

  ngOnInit() {
  }

}
