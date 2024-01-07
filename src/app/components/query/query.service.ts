import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  
  constructor(private http: HttpClient) { }
  
  getTicket(param: string):Observable<any[]>{
    
    const url = `https://brapi.dev/api/quote/${param}?token=${environment.tokenAPI}&range=1d&interval=1d&fundamental=true&dividends=true:`
    // true
    return (this.http.get<any[]>(url));
  }
}
