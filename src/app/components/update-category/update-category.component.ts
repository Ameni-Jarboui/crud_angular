import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  updateCategoryForm?: FormGroup;

  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute, 
    private service: CategoryService,
    private fb:FormBuilder,
    private router:Router){ }

    ngOnInit(){

      this.updateCategoryForm = this.fb.group({
        name: [null, [Validators.required]]
        })


      this.getCategoryById();

    }
    getCategoryById(){
      this.service.getCategoryById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateCategoryForm?.patchValue(res);
      })

    }

    updateCategory(){

      this.service.updateCategory(this.id,this.updateCategoryForm?.value).subscribe((res)=>{

        console.log(res);
        if(res.id !=null){
          this.router.navigateByUrl("");


        }
      })


    }
}
