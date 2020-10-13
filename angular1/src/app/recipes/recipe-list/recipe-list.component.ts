import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://pbs.twimg.com/profile_images/920646353889480705/dWNGt8S9.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://pbs.twimg.com/profile_images/920646353889480705/dWNGt8S9.jpg')
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
