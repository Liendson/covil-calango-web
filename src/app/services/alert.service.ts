import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert(title: string, text: string, icon: SweetAlertIcon = 'info', options: SweetAlertOptions = {}) {
    Swal.fire({
      title,
      text,
      icon,
      ...options
    });
  }

  showSuccess(title: string, text: string, options: SweetAlertOptions = {}) {
    this.showAlert(title, text, 'success', options);
  }

  showError(title: string, text: string, options: SweetAlertOptions = {}) {
    this.showAlert(title, text, 'error', options);
  }

  showWarning(title: string, text: string, options: SweetAlertOptions = {}) {
    this.showAlert(title, text, 'warning', options);
  }

  showInfo(title: string, text: string, options: SweetAlertOptions = {}) {
    this.showAlert(title, text, 'info', options);
  }

  showQuestion(title: string, text: string, options: SweetAlertOptions = {}) {
    this.showAlert(title, text, 'question', options);
  }

  showCustom(options: SweetAlertOptions) {
    Swal.fire(options);
  }

  showToast(title: string, icon: any = "success") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon,
      title
    });
  }
}