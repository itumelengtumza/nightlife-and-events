import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.page.html',
  styleUrls: ['./establishment-details.page.scss'],
})
export class EstablishmentDetailsPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  private establishment;
  private events;
  private reviews;
  constructor(private route: ActivatedRoute, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let establishment_id = this.route.snapshot.paramMap.get('id');
    this.establishment = this.estService.getEstablishment(establishment_id,'establishment_id');
    this.events = this.estService.getEvents(establishment_id,'establishment_id');
    this.reviews = this.estService.getReviews(establishment_id,'establishment_id');
    console.log(this.reviews);
  }

  counter(i: number) {
    return new Array(Number(i));
  }

}
