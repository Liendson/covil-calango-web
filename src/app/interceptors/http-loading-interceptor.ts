import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { inject } from '@angular/core';

export function httpLoadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const spinner = inject(NgxSpinnerService);
  let requestCount = 0;
  let loadingElement: boolean | null = null;

  requestCount++;

  if (requestCount === 1) {
    return from(showLoading()).pipe(
      switchMap(() => next(req).pipe(
        finalize(() => handleFinalize())
      ))
    );
  }

  return next(req).pipe(
    finalize(() => handleFinalize())
  );

  async function showLoading(): Promise<void> {
    if (!loadingElement) {
      spinner.show();
      loadingElement = true;
    }
  }

  async function hideLoading(): Promise<void> {
    if (loadingElement) {
      spinner.hide();
      loadingElement = null;
    }
  }

  function handleFinalize(): void {
    requestCount--;

    if (requestCount === 0) {
      hideLoading();
    }
  }
}