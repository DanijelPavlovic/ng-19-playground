import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';

export const requestProgressInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const loadingService = inject(LoadingService);

  if (!req.url.includes('/assets')) {
    loadingService.startRequestLoading();
  }

  const clonedRequest: HttpRequest<unknown> = req.clone({ reportProgress: true });

  return next(clonedRequest).pipe(
    finalize(() => {
      loadingService.stopRequestLoading();
    })
  );
};
