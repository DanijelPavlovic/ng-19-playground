import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isRequestLoading: WritableSignal<boolean> = signal(false);

  startRequestLoading() {
    this.isRequestLoading.set(true);
  }

  stopRequestLoading() {
    setTimeout(() => {
      this.isRequestLoading.set(false);
    }, 500);
  }
}
