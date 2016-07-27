import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {GradService} from './grad.service';
import {GradModel} from './grad.model';
import {UploadDemoComponent} from '../shared/upload-demo/upload-demo.component'

@Component({
  moduleId: module.id,
  // selector: 'monster-edit',
  templateUrl: 'grad-edit.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, UploadDemoComponent]
})
export class GradEditComponent implements OnInit {

  private frmGrad: FormGroup;
  private gradToEdit: GradModel;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private gradService: GradService) { }

  ngOnInit() {
    console.log('this.route.params', this.route.params);
    this.prepareForm();
    this.route.params.subscribe(params => {
        const id = params['id'];
        // This means EDIT mode
        if (id) {
          this.gradService.get(id)
            .then((grad) =>{

                this.gradToEdit = grad;
                console.log('in edit, ajax returned : ',  this.gradToEdit,  this.frmGrad.controls );
                (<FormControl>this.frmGrad.controls['name']).updateValue(grad.name);
                (<FormControl>this.frmGrad.controls['course']).updateValue(grad.course);
                (<FormControl>this.frmGrad.controls['email']).updateValue(grad.email);
                (<FormControl>this.frmGrad.controls['gitHub']).updateValue(grad.gitHub);
                (<FormControl>this.frmGrad.controls['linked']).updateValue(grad.linked);
                (<FormControl>this.frmGrad.controls['facebook']).updateValue(grad.facebook);
                (<FormControl>this.frmGrad.controls['galery']).updateValue(grad.galery);
                (<FormControl>this.frmGrad.controls['details']).updateValue(grad.details);
                (<FormControl>this.frmGrad.controls['moto']).updateValue(grad.moto);
            });
        }
      });
  }
  save() {
    const gradId = (this.gradToEdit)?  this.gradToEdit.id : undefined;
    this.gradService.save(this.frmGrad.value, gradId)
      .then(()=>{
          this.router.navigate(['/admin']);
      });

  }

  prepareForm() {
     this.frmGrad = this.formBuilder.group({
      name: ['',
              Validators.compose([Validators.required,
      
                                  Validators.minLength(3),
                                  Validators.maxLength(100)])],
      course: ['', Validators.required],
      email:['',Validators.required],
      gitHub:['',Validators.required],
      linked:['',Validators.required],
      facebook:['',Validators.required],
      galery:['',Validators.required],
      details:['',Validators.required],
      moto:['',Validators.required]
    });
  }
}
