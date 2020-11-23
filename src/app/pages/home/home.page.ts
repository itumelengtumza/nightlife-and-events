import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  postData = {
    photo_ref: '',
    name: '',
    address: '',
    type: '',
    place: '',
    city: '',
    province: '',
    place_capacity: 0,
    current_capacity: 0,
    place_booking_fee: '',
    entry_fee: '',
    operating_hours: '',
    rating: '',
    latitude: '',
    longitude: ''
    };
  public current: number = 35;
  public max: number = 100;
  public authUser: any;
  public establishments: any;
  public place: string = 'Soweto';
  public city: string = 'Johannesburg';
  public province: string = 'Gauteng';
  public place_id: string = '';
  public googleString: string = 'place/textsearch/json?input=nightclubs+bars+in+'+this.place+'&inputtype=textquery&'
  +'fields=photos,formatted_address,name,rating,opening_hours,geometry&key=my-key'
  public placeDetails: string = 'place/details/json?place_id='+this.place_id+'&fields=opening_hours,photos,reviews&key=my-key'
  constructor(private auth: AuthService, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
      this.authUser = res;
      });
      
      this.auth.getGoogleData(this.googleString).subscribe((res:any) => {
        let count = 0, i = 0;
        while(count < 3 || i < res.length){
          //let i = this.getRandomNumberBetween(0,res.results.length-1);
          if (res.results[i].photos == undefined || res.results[i].opening_hours == undefined) {
            console.log('Undefined at '+i);
            i++;
            continue;
          }
          console.log(count);
          this.postData.photo_ref = res.results[i].photos = res.results[i].photos;
          this.postData.name = res.results[i].name;
          this.postData.address = res.results[i].formatted_address;
          this.postData.type = res.results[i].types[0];
          this.postData.place = this.place;
          this.postData.city = this.city;
          this.postData.province = this.province;
          this.postData.place_capacity = this.getRandomNumberBetween(100,500);
          this.postData.current_capacity = this.getRandomNumberBetween(30,this.postData.place_capacity);
          this.postData.place_booking_fee = 'R'+Math.floor(this.getRandomNumberBetween(800,5000) / 10) * 10 ;
          this.postData. entry_fee = 'R'+Math.floor(this.getRandomNumberBetween(60,120) / 10) * 10 ;
          this.postData.operating_hours = res.results[i].opening_hours;
          this.postData.rating = res.results[i].rating;
          this.postData.latitude = res.results[i].geometry.location.lat;
          this.postData.longitude = res.results[i].geometry.location.lng;
          console.log(this.postData);
          /*
          this.auth.populateEstablishments(this.postData).subscribe(
            (res: any) => {
              console.log(res);
              this.auth.getData('getEstablishments').subscribe((res:any) => {
                this.establishments = res;
              });
            },
            (error: any) => {
            console.log(error);
            }
            );
          */
          i++;
          count++;
        }
      });
      
      //this.establishments = this.estService.establishments;  
  }

  getRandomNumberBetween(min: number,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
}

getDetails(id: any) {
  return this.establishments.find((todo: { id: any; }) => todo.id === id);
}

}
