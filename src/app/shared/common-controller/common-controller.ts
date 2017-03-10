import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class CommonController implements OnDestroy {
  unsubscribeOnDestroy = new Subject();

  ngOnDestroy() {
    this.unsubscribeOnDestroy.complete();
    this.unsubscribeOnDestroy = null;
  }

}
