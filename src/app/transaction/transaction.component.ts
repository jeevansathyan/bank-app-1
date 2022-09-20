import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
// to hold acno for current user
acno:any
// to hold transaction arry of current user
transaction:any
balance:any
  constructor(private ds:DataService) {
    ///get value from current acno from local storage
    this.acno =JSON.parse(localStorage.getItem('currentAcno')||'')
    // to get transaction array from data service-async.
this.ds.getTransaction(this.acno)
.subscribe(
//2xx
(result:any)=>{
this.transaction=result.transaction
},
result=>{
alert(result.error.message)
}
)

  }

  ngOnInit(): void {
  }

}
