import { Component,OnInit,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',' https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg'), 
    new Recipe('A test Recipe', 'This is simply a test',' https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg') 
  ];
  constructor(){}
  ngOnInit(){

  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
