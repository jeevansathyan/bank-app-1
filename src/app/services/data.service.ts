import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';

//global http header object/
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {


  constructor(private http:HttpClient) {
   // this.gatDetails()
  }

  //register
  register(acno: any, username: any, password: any) {
// request body/
const data={
  acno,
  username,
  password
};
// register api/
return this.http.post('http://localhost:3000/register',data)
  }

  login(acno: any, pswd: any) {
// request body/
const data={
  acno,
  pswd
};
// register api/
return this.http.post('http://localhost:3000/login',data)
  }

// to get request header with token/
getToken(){
//fetch token from local storage/
const token=JSON.parse(localStorage.getItem('token')||'')
//generate request header - httpHeader/
let headers=new HttpHeaders()
//append token inside header/
if(token){
headers=headers.append('x-access-token',token)
//implement overloading/
options.headers=headers
}
return options
}

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
// request body/
const data={
  acno,
  pswd,
  amt
};
// register api/
return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  }

  //withdraw
  withdraw(acno1: any, pswd1: any, amt1: any) {
// request body/
const data={
  acno1,
  pswd1,
  amt1
};
// register api/
return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
  }
// transaction

getTransaction(acno:any){

 // request body/
const data={
  acno,
};
// trans api/
return this.http.post('http://localhost:3000/transaction',data,this.getToken())
}
//delete-api
deleteAcc(acno:any){
return this.http.delete('http://localhost:3000/deleteAcc/'+acno)
}

}
