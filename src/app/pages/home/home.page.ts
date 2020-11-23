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
    rating: '',
    latitude: '',
    longitude: ''
    };
  public i = 3;
  public current: number = 35;
  public max: number = 100;
  public authUser: any;
  public establishments: any;
  public place: string = 'Soweto';
  public city: string = 'Johannesburg';
  public province: string = 'Gauteng';
  public googleString: string = 'place/textsearch/json?input=nightclubs+bars+in+'+this.place+'&inputtype=textquery&'
  +'fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBqjZyp0Ct09jHgDHWTpcJoC5BT_O7uDN4'
  constructor(private auth: AuthService, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
      this.authUser = res;
      });
      /*
      this.auth.getGoogleData(this.googleString).subscribe((res:any) => {
        console.log(res);
        while(this.i < 6){
          //let j = this.getRandomNumberBetween(0,res.results.length-1);
          let j = this.i;
          console.log(j);
          this.postData.photo_ref = res.results[j].photos == undefined ? null : res.results[j].photos[0].photo_reference;
          this.postData.name = res.results[j].name;
          this.postData.address = res.results[j].formatted_address;
          this.postData.type = res.results[j].types[0];
          this.postData.place = this.place;
          this.postData.city = this.city;
          this.postData.province = this.province;
          this.postData.place_capacity = this.getRandomNumberBetween(100,500);
          this.postData.current_capacity = this.getRandomNumberBetween(30,this.postData.place_capacity);
          this.postData.place_booking_fee = 'R'+Math.floor(this.getRandomNumberBetween(800,5000) / 10) * 10 ;
          this.postData. entry_fee = 'R'+Math.floor(this.getRandomNumberBetween(60,120) / 10) * 10 ;;
          this.postData.rating = res.results[j].rating;
          this.postData.latitude = res.results[j].geometry.location.lat;
          this.postData.longitude = res.results[j].geometry.location.lng;
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
          this.i++;
        }
      });
      */
      //this.establishments = this.estService.establishments;  
  }

  getRandomNumberBetween(min: number,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
}

getDetails(id: any) {
  return this.establishments.find((todo: { id: any; }) => todo.id === id);
}

}
