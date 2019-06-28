import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f')shoppingListForm:NgForm;
    subscription:Subscription;
    editedItemIndex:number;
    editedItem:Ingredient;
    editMode = false;


    constructor(private shoppingListService:ShoppingListService) {
    }

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (index:number) => {
                this.editMode = true;
                this.editedItemIndex = index;
                this.editedItem = this.shoppingListService.getIngredient(index);
                this.shoppingListForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            }
        )
    }

    onSubmit(form:NgForm) {
        const formValue = form.value;
        const newIngredient = new Ingredient(formValue.name, formValue.amount);
        if (this.editMode) {
            this.shoppingListService.onUpdateIngredient(this.editedItemIndex, newIngredient);
        } else {
            this.shoppingListService.onAddIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }

    onClear() {
        this.shoppingListForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.onClear();
        this.shoppingListService.onDeleteIngredient(this.editedItemIndex);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
