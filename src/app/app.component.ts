import { Component, OnInit } from '@angular/core';
import { DataService } from './_services/data.service';

import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { PrimeNGConfig } from 'primeng/api';

interface Item {
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-practice';
  item$?: Observable<DocumentData[]>;
  collection = collection(this.firestore, 'items');
  constructor(
    private firestore: Firestore
  ) {

  }
  ngOnInit(): void {
    this.item$ = collectionData(this.collection);
  }
}
