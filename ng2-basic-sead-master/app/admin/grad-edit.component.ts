import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {GradService} from './grad.service';
import {GradModel} from './grad.model';
import {UploadDemoComponent} from '../shared/upload-demo/upload-demo.component';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

@Component({
  moduleId: module.id,
  styleUrls: [`../../public/css/styles.css`],
  // selector: 'monster-edit',
  templateUrl: 'grad-edit.component.html',
  directives: [FILE_UPLOAD_DIRECTIVES,REACTIVE_FORM_DIRECTIVES, UploadDemoComponent]
})
export class GradEditComponent implements OnInit {

  private frmGrad: FormGroup;
  private gradToEdit: GradModel;
  public uploader:FileUploader;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private gradService: GradService) {
      this.uploader = new FileUploader({url: gradService.url});
      this.uploader.onCompleteAll = () => {
          this.router.navigate(['/admin']);
      };
  }

  ngOnInit() {
    // console.log('this.route.params', this.route.params);
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
                (<FormControl>this.frmGrad.controls['github']).updateValue(grad.github);
                (<FormControl>this.frmGrad.controls['linkedin']).updateValue(grad.linkedin);
                (<FormControl>this.frmGrad.controls['facebook']).updateValue(grad.facebook);
                (<FormControl>this.frmGrad.controls['gallery']).updateValue(grad.gallery);
                (<FormControl>this.frmGrad.controls['details']).updateValue(grad.details);
                (<FormControl>this.frmGrad.controls['moto']).updateValue(grad.moto);
            });
        }
      });
  }
  save() {
    // const gradId = (this.gradToEdit)?  this.gradToEdit.id : undefined;
    // this.gradService.save(this.frmGrad.value, gradId)
    //   .then(()=>{
    //       this.router.navigate(['/admin']);
    //   });
         // if there is a file to upload, use the uploader to update both file and form data
         console.log('this.uploader', this.uploader);
      if (this.uploader.getNotUploadedItems().length) {
          this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
              form.append('name', this.frmGrad.value.name);
              form.append('course', this.frmGrad.value.course);
              form.append('email', this.frmGrad.value.email);
              form.append('github', this.frmGrad.value.github);
              form.append('linkedin', this.frmGrad.value.linkedin);
              form.append('facebook', this.frmGrad.value.facebook);
              form.append('gallery', this.frmGrad.value.gallery);
              form.append('details', this.frmGrad.value.details);
              form.append('moto', this.frmGrad.value.moto);
         };
           console.log('this.uploader after', this.uploader);
          //   console.log('Uploading Both Data and Files...');
          this.uploader.uploadAll();   
      } else {
          // if file upload support is not needed, go regular:
          const gradId = (this.gradToEdit) ? this.gradToEdit.id : undefined;
          this.gradService.save(this.frmGrad.value, gradId)
              .then(() => {
                  this.router.navigate(['/admin']);
              });
      }

  }

  prepareForm() {
     this.frmGrad = this.formBuilder.group({
      name: ['',
              Validators.compose([Validators.required,
      
                                  Validators.minLength(3),
                                  Validators.maxLength(100)])],
      course: ['', Validators.required],
      email:['',Validators.required],
      github:['',Validators.required],
      linkedin:['',Validators.required],
      facebook:['',Validators.required],
      gallery:['',Validators.required],
      details:['',Validators.required],
      moto:['',Validators.required]
    });
  }
}
