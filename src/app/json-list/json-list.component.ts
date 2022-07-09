import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { DataService } from '../_services/data.service';
import { EmitEvent, EventBusService, Events, Testing } from '../_services/event-bus.service';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.scss']
})
export class JsonListComponent implements OnInit {
  @Input() customers: any[] = []
  data?: Observable<any[]>
  text1?: string
  text2?: string
  constructor(
    private eventBus: EventBusService<Testing>,
    private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.data = this.dataService.getJsonList()
    of(1, 2, 3, 4, 5).pipe(
      map(value => value * 10)
    ).subscribe(console.log)
  }
  onClick(id: string) {
    this.router.navigateByUrl(`json-details/${id}`)
  }
  selectCustomer() {
    this.eventBus.emit(new EmitEvent<Testing>(Events.testing, {
      text1: this.text1,
      text2: this.text2
    }))
  }
}
