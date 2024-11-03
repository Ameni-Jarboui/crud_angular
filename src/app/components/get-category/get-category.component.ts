import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.css']
})
export class GetCategoryComponent {

  categories: any = [];

  constructor(private categoryService: CategoryService,private dialog:MatDialog){}

  ngOnInit(){
    this.getAllCategories();


  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((res) => {
      console.log(res);
      this.categories = res;
    })
  }
  deleteCategory(id: number){
    //1 ouvrir la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, { 
      height: '200px',
      width: '300px',
    });
    //2 apres fermer le dialog de confirmation
    
    dialogRef.afterClosed().subscribe((x)=>{ if(x)
    this.categoryService.deleteCategory(id).subscribe((res)=>{
      console.log(res);
      this.getAllCategories();
    })

  })


}
}
