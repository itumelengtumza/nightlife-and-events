import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  apiKey = 'AIza....';
  postData = {
    photos: [],
    name: '',
    address: '',
    contact_numbers: '',
    social_media: '',
    type: '',
    place: '',
    city: '',
    province: '',
    place_capacity: 0,
    current_capacity: 0,
    place_booking_fee: '',
    entry_fee: '',
    operating_hours: [],
    place_reviews: [],
    rating: '',
    latitude: '',
    longitude: '',
    hosted_by: '',
    duration: '',
    email: '',
    details: ''
    };
  public current: number = 35;
  public max: number = 100;
  public authUser: any;
  public establishments: any;
  public events: any;
  public place: string = 'Soweto';
  public city: string = 'Johannesburg';
  public province: string = 'Gauteng';
  public googleString: string = 'place/textsearch/json?input=nightclubs+bars+in+'+this.place+'&inputtype=textquery&'
  +'fields=photos,formatted_address,name,rating,opening_hours,geometry&key='+this.apiKey;
  constructor(private auth: AuthService, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
      this.authUser = res;
      });
      /*
      this.auth.getGoogleData(this.googleString).subscribe((res:any) => {
        let count = 0, i = 0, len = res.results.length, seen_num = 0;
        let seen_arr = new Array(len);
        console.log(res);
        while(count < 3 || seen_num === len){
          console.log(seen_num);
          i = this.getRandomNumberBetween(0,len-1);
          if (res.results[i].photos == undefined || res.results[i].opening_hours == undefined || seen_arr[i]) {
            console.log('Undefined at '+i);
            seen_arr[i] = 1;
            seen_num += 1;
            //i = this.getRandomNumberBetween(0,res.results.length-1);
            continue;
          }
          seen_arr[i] = 1;
          seen_num += 1;
          //console.log(i);
            this.auth.getGoogleData('place/details/json?place_id='+res.results[i].place_id+'&key='+this.apiKey).subscribe((res:any) => {
              console.log(res);
              this.postData.photos = res.result.photos;
              this.postData.name = res.result.name;
              this.postData.address = res.result.formatted_address;
              this.postData.contact_numbers = res.result.formatted_phone_number == undefined ? null : res.result.formatted_phone_number;
              this.postData.social_media = res.result.website == undefined ? null : res.result.website;
              this.postData.type = res.result.types[0];
              this.postData.place = this.place;
              this.postData.city = this.city;
              this.postData.province = this.province;
              this.postData.place_capacity = this.getRandomNumberBetween(100,500);
              this.postData.current_capacity = this.getRandomNumberBetween(30,this.postData.place_capacity);
              this.postData.place_booking_fee = 'R'+Math.floor(this.getRandomNumberBetween(800,5000) / 100) * 100 ;
              this.postData. entry_fee = 'R'+Math.floor(this.getRandomNumberBetween(60,120) / 10) * 10 ;
              this.postData.operating_hours = res.result.opening_hours.weekday_text;
              this.postData.place_reviews = res.result.reviews
              this.postData.rating = res.result.rating;
              this.postData.latitude = res.result.geometry.location.lat;
              this.postData.longitude = res.result.geometry.location.lng;
              this.auth.populateEstablishments(this.postData).subscribe(
                (res: any) => {
                  //console.log(res);
                  this.auth.getData('getEstablishments').subscribe((res:any) => {
                    this.establishments = res;
                  });
                },
                (error: any) => {
                  //console.log(error);
                }
              );
          });
          i = (this.getRandomNumberBetween(0,res.results.length-1) + 1) % len;
          seen_arr[i] = 1;
          // events dummy data
          this.postData.photos = res.results[i].photos == undefined ? null : res.results[i].photos[0].photo_reference;
          this.postData.hosted_by = res.results[i].name;
          // 12-12-2020 10:00 to 12-12-2020 17:00
          let start_day = this.getRandomNumberBetween(1,29);
          let end_day = this.getRandomNumberBetween(start_day,start_day+1);
          let start_hour = this.getRandomNumberBetween(10,12);
          let end_hour = this.getRandomNumberBetween(start_hour+5,start_hour+8);
          let month = this.getRandomNumberBetween(10,12);
          let year = 2020;
          this.postData.duration = start_day+'-'+month+'-'+year+' '+start_hour+':00'+' to '+end_day+'-'+month+'-'+year+' '+end_hour+':00';
          this.postData.name = res.results[i].name+' '+this.getRandomNumberBetween(4,12)+'th Annual Event';
          this.postData.place = this.place;
          this.postData.city = this.city;
          this.postData.province = this.province;
          this.postData.details = this.postData.name+' is an event ...';
          this.postData.type = res.results[i].types[0];
          this.postData.contact_numbers = '+27 '+this.getRandomNumberBetween(10,99)+' '+this.getRandomNumberBetween(100,999)+' '+this.getRandomNumberBetween(1000,9999);
          this.postData.address = res.results[i].formatted_address;
          this.postData.email = 'name@email.com';
          this.postData. entry_fee = 'R'+Math.floor(this.getRandomNumberBetween(60,200) / 10) * 10 ;
          this.postData.latitude = res.results[i].geometry.location.lat;
          this.postData.longitude = res.results[i].geometry.location.lng;
          this.auth.populateEvents(this.postData).subscribe(
            (res: any) => {
              console.log(res);
            },
            (error: any) => {
              console.log(error);
            }
          );
          count++;
        }
      });
      */  
  }

  getRandomNumberBetween(min: number,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
}

}
