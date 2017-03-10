import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonController } from '../../shared/common-controller/common-controller';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.scss']
})
export class CvEditComponent extends CommonController implements OnInit {
  cv: FirebaseObjectObservable<any>;
  cvForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private af: AngularFire
  ) { super(); }

  ngOnInit() {
    this.cv = this.af.database.object('/cv');
    this.cv.takeUntil(this.unsubscribeOnDestroy).subscribe(val => {
      debugger
    }, err => {
      debugger
    }, () => {
      debugger
    });
    this.createForm();
  }

  private createForm() {
    this.cvForm = this.fb.group({
      avatar: new FormControl()
    });
  }

  save() {
    debugger
    this.cv.set(this.cvForm.value);
  }

}
