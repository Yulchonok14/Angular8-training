import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-edit',
    styleUrls: ['./recipe-edit.component.css'],
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
    item:Recipe;
    id:number;
    editMode = false;
    recipeForm: FormGroup;


    constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params:Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }

    onSubmit() {
        const newRecipe = this.recipeForm.value;
        if(this.editMode) {
            newRecipe.id = this.id;
            this.recipeService.updateRecipe(this.id, newRecipe);
        } else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(),
                'amount': new FormControl()
            })
        )
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    private initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescr = '';
        let recipeIngredients = new FormArray([]);

        if (this.editMode) {
            this.item = this.recipeService.getRecipeById(this.id);
            recipeName = this.item.name;
            recipeDescr = this.item.description;
            recipeImagePath = this.item.imagePath;
            if (this.item['ingredients']) {
                for (let ingredient of this.item.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        }));
                }
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescr, Validators.required),
            'ingredients': recipeIngredients
        })
    }
}
