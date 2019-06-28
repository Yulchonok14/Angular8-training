import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http:HttpClient,
              private recipeService:RecipeService,
              private authService:AuthService) {
  }

  storeRecipes() {
    //const token = this.authService.getToken();

    this.http.put('https://recipe-book-f67d8.firebaseio.com/recipes.json',
      this.recipeService.getRecipes())
      .subscribe(response => {
        console.log(response);
      });

    //axamit
    /*return this.http.put('https://ng-recipe-book-5b039.firebaseio.com/recipes.json',
     this.recipeService.getRecipe());
     */

  }

  fetchRecipes() {
    //const token = this.authService.getToken();

    return this.http
      .get<Recipe[]>(
        'https://recipe-book-f67d8.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              id: recipe.id,
              name: recipe.name,
              description: recipe.description,
              imagePath: recipe.imagePath,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
          /*for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;*/
        }),
        tap(recipes => {
          this.recipeService.setRecipe(recipes);
        }
      )
  );

    //axamit
    /*return this.http.get('https://ng-recipe-book-5b039.firebaseio.com/recipes.json')
     .pipe(map(
     (response: Response) => {
     const recipes: Recipe[] = response.json();
     for(let recipe of recipes){
     if(!recipe['ingredients']) {
     recipe['ingredients'] = [];
     }
     }
     return recipes;
     }
     ))
     .subscribe(
     (recipes: Recipe[]) => {
     this.recipeService.setRecipe(recipes);
     }
     );*/
  }
}
