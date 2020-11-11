import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public authUser: any;
  public establishments: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
      this.authUser = res;
      });
      this.auth.getData('getEstablishments').subscribe((res:any) => {
        this.establishments = res;
      });
  }

}
