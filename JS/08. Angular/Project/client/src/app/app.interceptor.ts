import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

const { apiUrl } = environment;
const API = '/api'

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      // withCredentials: true, //* Doesn't work with current server
    })
  }

  return next(req);
};
