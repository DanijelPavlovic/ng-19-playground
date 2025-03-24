import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import {MessageService} from 'primeng/api';
import {GENERIC_ERROR_MESSAGE, GENERIC_ERROR_MESSAGE_CODE} from '../constants'; // Optional for user alerts

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  const messageService: MessageService = inject(MessageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      showNotification(error, messageService)
      // handleErrorStatus(error.status)

      return throwError((): HttpErrorResponse => error);
    })
  );
};

const showNotification =  (error: HttpErrorResponse, messageService: MessageService): void => {

  const message: string = error.error?.error?.message || GENERIC_ERROR_MESSAGE;
  const summary = `${error.status}: ${error.error?.error?.message_code || GENERIC_ERROR_MESSAGE_CODE}`

  messageService.add({
    severity: 'error',
    summary,
    key: 'br',
    detail: message,
  });
}

// const handleErrorStatus = (status: number): void => {
//   switch (status) {
//     case 401: {
//       break;
//     }
//     case 403: {
//       break;
//     }
//     case 500: {
//       break;
//     }
//     default: {
//       break;
//     }
//   }
// }
