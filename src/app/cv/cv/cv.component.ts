import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { CV } from '../cv';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  cv: Observable<CV>;

  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.cv = this.af.database.object('/cv').filter(cv => cv);
  }

}
