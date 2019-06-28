import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

    recipes:Recipe[];
    subscription: Subscription;

    constructor(private recipeService:RecipeService,
                private router:Router,
                private route:ActivatedRoute,
                private dataStorageService: DataStorageService) {
    }

    ngOnInit() {
      //this.recipes = this.recipeService.getRecipe();

      this.dataStorageService.fetchRecipes().subscribe();

        this.subscription = this.recipeService.recipesChanged.
        subscribe((recipes:Recipe[]) => {
            this.recipes = recipes;
        });
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
