import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  private event;
  constructor(private route: ActivatedRoute, private estService: EstablishmentsRepoService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let event_id = this.route.snapshot.paramMap.get('id');
    this.event = this.estService.getEvents(event_id);
  }

  counter(i: number) {
    return new Array(Number(i));
  }

}
