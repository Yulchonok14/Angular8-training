import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log(of(1,2,3).subscribe());
  }

}
