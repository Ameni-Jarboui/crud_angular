import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
  })
  export class PostCategoryComponent {
    postCategoryForm!: FormGroup;

  constructor(private categoryService: CategoryService,
  private fb: FormBuilder,
  private router: Router) { }
 
  ngOnInit() {
  this.postCategoryForm = this.fb.group({
  name: [null, [Validators.required]]
  })
  }
  postCategory(){

    console.log(this.postCategoryForm.value);
    this.categoryService.postCategory(this.postCategoryForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("");
      
    })
  }
  }