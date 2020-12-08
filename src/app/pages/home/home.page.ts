import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  firstNameSyllables: string[];
  lastNameSyllables: string[];
  apiKey = '';
  postData = {
    password: '',
    manager_email: '',
    manager_name: '',
    activated : 1, // just to populate database, bypassing email verification
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
    checked_in: 0,
    place_booking_fee: '',
    entry_fee: 0,
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
   
    hostess_postData = {
      password: '',
      email: '',
      name: '',
      activated : 1, // just to populate database, bypassing email verification
      manager_id: 0
    }
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
  public checked_in: string[] = [];
  constructor(private auth: AuthService, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
      this.authUser = res;
      });
      this.initNames();
      //console.log(this.createNewName());
      //console.log("THIS IS JUST A TEST".toLowerCase().replace(/\s/g, ""));
      /*
      this.auth.getGoogleData(this.googleString).subscribe((res:any) => {
        let count = 0, i = 0, len = res.results.length, seen_num = 0;
        let seen_arr = new Array(len);
        console.log(res);
        while(count < 3 || seen_num === len){
          console.log(seen_num);
          //console.log(!res.results[i].opening_hours.length);
          if (seen_num == len) break;
          i = this.getRandomNumberBetween(0,len-1);
          if (res.results[i].photos == undefined || res.results[i].opening_hours == undefined || res.results[i].opening_hours =={} ||  seen_arr[i]) {
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
              let temp_name_arr = this.createNewName();
              this.postData.password = temp_name_arr.firstName,
              this.postData.manager_email = res.result.formatted_address.replace(/\s/g, "")+'@email.com',
              this.postData.manager_name = temp_name_arr.firstName+' '+temp_name_arr.lastName,
              this.postData.activated = 1, 
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
              this.postData.checked_in = this.getRandomNumberBetween(50,300);
              this.postData.place_booking_fee = 'R'+Math.floor(this.getRandomNumberBetween(800,5000) / 100) * 100 ;
              this.postData.entry_fee = Math.floor(this.getRandomNumberBetween(60,120) / 10) * 10 ;
              this.postData.operating_hours = res.result.opening_hours.weekday_text;
              this.postData.place_reviews = res.result.reviews
              this.postData.rating = res.result.rating;
              this.postData.latitude = res.result.geometry.location.lat;
              this.postData.longitude = res.result.geometry.location.lng;
              this.auth.populateEstablishments(this.postData).subscribe(
                (res: any) => {
                  console.log(res);
                  //this.auth.getData('getEstablishments').subscribe((res:any) => {
                  //  this.establishments = res;
                  //});
                },
                (error: any) => {
                  console.log(error);
                }
              );
          });
          /*
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
          this.postData.entry_fee = Math.floor(this.getRandomNumberBetween(60,200) / 10) * 10 ;
          this.postData.latitude = res.results[i].geometry.location.lat;
          this.postData.longitude = res.results[i].geometry.location.lng;
          this.auth.populateEvents(this.postData).subscribe(
            (res: any) => {
              console.log(res);
            },
            (error: any) => {
              console.log(error);
            }
          );*/
          /*
          count++;
        }
      });
        */
      /*  
     for (var i = 1; i < 5; i++) {
        let temp_name_arr = this.createNewName();
        this.hostess_postData.name = temp_name_arr.firstName+' '+temp_name_arr.lastName,
        this.hostess_postData.password = temp_name_arr.firstName,
        this.hostess_postData.email = temp_name_arr.firstName+'@email.com',
        this.hostess_postData.activated = 1, // just to populate database, bypassing email verification
        this.hostess_postData.manager_id = this.getRandomNumberBetween(1,3);
        console.log(this.hostess_postData);
        this.auth.registerHostess(this.hostess_postData).subscribe(
          (res: any) => {
            console.log(res);
            
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
       */
  }

  getRandomNumberBetween(min: number,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
}

update(event,id,current_capacity) {
  console.log(event.detail.checked);
  console.log(id);
  if (event.detail.checked) {
    this.checked_in[id] =  'Yes';
    current_capacity++;
  }
  else {
    this.checked_in[id] =  'No';
    current_capacity--;
  }
  this.estService.changeValue(id,'current_capacity',current_capacity);
}

getFirstWord(str) {
  let spaceIndex = str.indexOf(' ');
  return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};

initNames() {
  this.firstNameSyllables = ["ama","dile","aya","boi","bon","buh","dik","dum","gug","hle","itu","kab","kag",
  "kat","kef","ile","nda","dile","pelo","tum","elo","gani","olo","ele","edi","isa","nge","lethu","iso", "eng",
"lwe","si","ato"];

this.lastNameSyllables = ["dla","nko","ndl","khu","sit","mah","mok","mkh","mthe","zulu","ngc","gum","but",
  "kho","mini","osi","ovu","malo","ole","ngu","ena","ize","mbu","obo","ede","the","lez","iya","mof", "ngo",
"oke","eng","tha"];
    
}

createNewName() {
    let firstName: string = "";
    let lastName: string = "";
    for (let i=0; i < 2; i++) {
        firstName += this.firstNameSyllables[this.getRandomNumberBetween(0, this.firstNameSyllables.length)];
        lastName += this.lastNameSyllables[this.getRandomNumberBetween(0, this.lastNameSyllables.length)];
    }
    return {firstName,lastName};
}

}
