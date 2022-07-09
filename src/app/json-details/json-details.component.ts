import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventBusService, Events, Testing } from '../_services/event-bus.service';

@Component({
  selector: 'app-json-details',
  templateUrl: './json-details.component.html',
  styleUrls: ['./json-details.component.scss']
})
export class JsonDetailsComponent implements OnInit {
  text1?: string;
  text2?: string
  subs = new Subscription()
  constructor(private route: ActivatedRoute,
    private eventBus: EventBusService<Testing>) { }

  ngOnInit(): void {
    this.subs.add(this.eventBus.on(Events.testing, 
      (cust: Testing) =>{ 
        this.text1 = cust.text1
        this.text2 = cust.text2}))
  }

}
