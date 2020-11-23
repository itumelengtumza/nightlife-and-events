import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.page.html',
  styleUrls: ['./establishment-details.page.scss'],
})
export class EstablishmentDetailsPage implements OnInit {

  private establishment;
  constructor(private route: ActivatedRoute, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let establishment_id = this.route.snapshot.paramMap.get('id');
    this.establishment = this.estService.getEstablishments(establishment_id);
  }

}
