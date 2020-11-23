import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsRepoService {
  public establishments: any;
  constructor(private auth: AuthService) { 
    this.auth.getData('getEstablishments').subscribe((res:any) => {
      console.log(res);
      this.establishments = res;
    });
  }

  getEstablishments(id:any): any {
    return this.establishments.find(entry => entry.establishment_id == id);
  }
}
