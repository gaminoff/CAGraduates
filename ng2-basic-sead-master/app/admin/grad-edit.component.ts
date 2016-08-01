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
  private uploadedImgsUrls = { imgBefore: '', imgAfter: '' };

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private gradService: GradService) {
      this.uploader = new FileUploader({url: gradService.url});

      this.uploader.onCompleteItem = (item, response) => {
        response = JSON.parse(response);
        // console.log('uploaded file!', item, response);
        if (this.uploadedImgsUrls.imgBefore === '') 
            this.uploadedImgsUrls.imgBefore = response.imgUrl ;
        else this.uploadedImgsUrls.imgAfter = response.imgUrl ;
      };

      this.uploader.onCompleteAll = () => {
          (<FormControl>this.frmGrad.controls['imgBeforeUrl']).updateValue(this.uploadedImgsUrls.imgBefore);
          (<FormControl>this.frmGrad.controls['imgAfterUrl']).updateValue(this.uploadedImgsUrls.imgAfter);
          console.log('frmGrad', this.frmGrad.value);
          const gradId = (this.gradToEdit)?  this.gradToEdit.id : undefined;    
          this.gradService.save(this.frmGrad.value, gradId)
            .then((grad: GradModel)=>{
                const newGradId = grad.id ;
                console.log('grad from save: ', newGradId);
                this.router.navigate(['/admin']);
            });  
      };
  }

  ngOnInit() {
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
                (<FormControl>this.frmGrad.controls['imgBeforeUrl']).updateValue(grad.imgBeforeUrl);
                (<FormControl>this.frmGrad.controls['imgAfterUrl']).updateValue(grad.imgAfterUrl);
            });
        }
      });
  }

  save() {
    if (this.uploader.getNotUploadedItems().length) {
        this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
          // form.append('newGradId', newGradId);
          console.log('this.uploader', this.uploader);
        };
        this.uploader.uploadAll(); 
    }
  }



  prepareForm() {
     this.frmGrad = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,
                                     Validators.minLength(3),
                                     Validators.maxLength(100)])],
      course: ['', Validators.required],
      email:['',Validators.required],
      github:['',Validators.required],
      linkedin:['',Validators.required],
      facebook:['',Validators.required],
      gallery:['',Validators.required],
      details:['',Validators.required],
      moto:['',Validators.required],
      imgBeforeUrl:['',Validators.required],
      imgAfterUrl:['',Validators.required]
    });
  }
}
