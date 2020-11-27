import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsRepoService {
  public establishments: any;
  public events: any;
  constructor(private auth: AuthService) { 
    this.auth.getData('getEstablishments').subscribe((res:any) => {
      console.log(res);
      this.establishments = res;
    });
    this.auth.getData('getEvents').subscribe((res:any) => {
      console.log(res);
      this.events = res;
    });
  }

  getEstablishments(id:any): any {
    return this.establishments.find(entry => entry.establishment_id == id);
  }
  getEvents(id:any): any {
    return this.events.find(entry => entry.event_id == id);
  }
}
