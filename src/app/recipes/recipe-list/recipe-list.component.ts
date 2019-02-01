import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: [Recipe] = [
    new Recipe('A Test Recipe', 'This is simply a test.',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2017/12/Vegetable-stew-recipe-920x605.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
