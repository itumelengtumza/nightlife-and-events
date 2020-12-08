import { Component, OnInit } from '@angular/core';
import { EstablishmentsRepoService } from 'src/app/services/establishments-repo.service';

@Component({
  selector: 'app-hostess-list',
  templateUrl: './hostess-list.page.html',
  styleUrls: ['./hostess-list.page.scss'],
})
export class HostessListPage implements OnInit {

  constructor(private estService: EstablishmentsRepoService) { }

  ngOnInit() {
  }

}
