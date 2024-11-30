import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private apiError$$ = new BehaviorSubject(null);
  private apiError$ = this.apiError$$.asObservable();

  constructor() { }

  setErrro(error: any): void {
    this.apiError$$.next(error);
  }
}
