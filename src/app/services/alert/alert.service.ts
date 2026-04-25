import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root' // makes it singleton automatically
})
export class AlertService {

  private swal = Swal.mixin({
    background: '#1a1a1a',
    color: '#eaeaea',
    confirmButtonColor: '#ffd700',
    cancelButtonColor: '#333',
    buttonsStyling: false,
    customClass: {
      popup: 'dg-popup',
      title: 'dg-title',
      htmlContainer: 'dg-text',
      confirmButton: 'dg-confirm-btn',
      cancelButton: 'dg-cancel-btn'
    }
  });

  async confirm(title: string, text: string): Promise<boolean> {
    const result: SweetAlertResult = await this.swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    });

    return result.isConfirmed;
  }

  success(message: string) {
    return this.swal.fire({
      icon: 'success',
      title: message,
      timer: 2000,
      showConfirmButton: false
    });
  }

  error(message: string) {
    return this.swal.fire({
      icon: 'error',
      title: message
    });
  }

  info(message: string) {
    return this.swal.fire({
      icon: 'info',
      title: message
    });
  }
  
  warn(message: string){
    return this.swal.fire({
      icon: 'warning',
      title: message
    });
  }
}