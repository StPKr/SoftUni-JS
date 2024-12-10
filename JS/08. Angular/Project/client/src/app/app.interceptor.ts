import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ErrorMessageService } from './core/error-message/error-message.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

const { apiUrl } = environment;
const API = '/api'

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
    })
  }
  const errorMsgService = inject(ErrorMessageService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/home'])
      } else {
        errorMsgService.setError(err);
        router.navigate(['/error'])
      }

      return [err];
    })
  );
};
