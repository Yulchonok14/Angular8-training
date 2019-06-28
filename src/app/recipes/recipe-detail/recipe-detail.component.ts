import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router ){ }

  ngOnInit() {

    this.route.params
      .subscribe((params: Params) => {
        this.recipeItem = this.recipeService.getRecipeById(+params['id']);
      });
  }

  transferIngredients(){
    this.recipeService.addIngredientToShoppingList(this.recipeItem.ingredients);
  }

  onRemoveRecipe() {
    this.recipeService.removeRecipe(this.recipeItem.id);
    this.router.navigate(['/recipes']);
  }

}
