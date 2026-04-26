import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertService } from '../services/alert/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private alertService : AlertService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
        console.log(error);
        if(error.status === 0){
          this.alertService.error("Server might be down. Please try again later.");
        }
        else if(error.status < 500){
          this.alertService.error(error.error.message);
        }
        else{
          this.alertService.error("An unexpected error occurred. Please try again later.");
        }
        return throwError(() => error);
      })
    );
  }
}



