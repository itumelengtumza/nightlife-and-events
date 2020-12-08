import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsRepoService {
  public establishments: any;
  public events: any;
  public reviews: any;
  public hostess: any;
  constructor(private auth: AuthService) { 
    this.auth.getData('getEstablishments').subscribe((res:any) => {
      console.log(res);
      this.establishments = res;
    });
    this.auth.getData('getEvents').subscribe((res:any) => {
      console.log(res);
      this.events = res;
    });
    this.auth.getData('getReviews').subscribe((res:any) => {
      console.log(res);
      this.reviews = res;
    });
    this.auth.getData('getHostesses').subscribe((res:any) => {
      console.log(res);
      this.hostess = res;
    });
  }
  
  getEstablishment(input_id:any, table_id:any): any {
    return this.establishments.find(entry => entry[table_id] == input_id);
  }

  getEvent(input_id:any, table_id:any): any {
    return this.events.find(entry => entry[table_id] == input_id);
  }

  // for showing upcoming events per establishment
  getEvents(input_id:any, table_id:any): any {
    return this.events.filter(entry => entry[table_id] == input_id);
  }

  getReviews(input_id:any, table_id:any): any {
    return this.reviews.filter(entry => entry[table_id] == input_id);
  }

  getHostess(input_id:any, table_id:any): any {
    return this.hostess.find(entry => entry[table_id] == input_id);
  }

  changeValue(id,col_name:string,value) {
    this.getEstablishment(id,'establishment_id')[col_name] = value;
  }
}
