import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-hostess-details',
  templateUrl: './hostess-details.page.html',
  styleUrls: ['./hostess-details.page.scss'],
})
export class HostessDetailsPage implements OnInit {

  private hostess;
  constructor(private route: ActivatedRoute, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let hostess_id = this.route.snapshot.paramMap.get('id');
    console.log(hostess_id);
    this.hostess = this.estService.getHostess(hostess_id,'hostess_id');
  }

}
