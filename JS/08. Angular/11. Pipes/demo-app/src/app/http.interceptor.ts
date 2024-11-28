import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { API_URL } from './constants';
import { catchError, EMPTY, tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api')) {
    req = req.clone({
      url: req.url.replace('/api', API_URL)
    });
  }

  return next(req).pipe(
    //reads the data
    tap(req => {
      if (req instanceof HttpRequest) {
        console.log(req);
      }
    }), 
    //handles the error
    catchError((err) => {
      if(err.status === 404){
        console.error('Error from interceptor', err)
        return EMPTY;
      }
      console.log(err);
      return [err];
    })
  );
};

