
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, mergeAll, mergeMap, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {
  @ViewChild('searchBy') el: ElementRef;
  searchInput: string = '';
  people$: Observable<Person[]>; 
  constructor(private http: HttpClient) { }

  private readonly url: string = 'http://localhost:9000';

  ngOnInit(): void {
   
  }
 
  ngAfterViewInit() {
    // this.secondOption();
    // this.firstOption(); 
    this.thirdOption(); 
  } 

  filterPeople(searchInput: string): Observable<Person[]> {
    if(searchInput.length===0)
      return of([]);
    return this.http.get<Person[]>(`${this.url}/${this.searchInput}`);
  }

  thirdOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup');
    // this.people$ = keyup$
    //   .pipe(map( (e) => this.filterPeople(this.searchInput)))
    //   .pipe(switchAll());

    this.people$ = keyup$
      .pipe(
        debounceTime(700),
        switchMap(() => this.filterPeople(this.searchInput)))
  }
 
  secondOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup');

    // let fetch$ = keyup$.pipe(map( (e) => this.filterPeople(this.searchInput))); 
    // fetch$
    //   .pipe(mergeAll())
    //   .subscribe((data) => console.log(data));   
    // this.people$ = fetch$.pipe(mergeAll());


    this.people$ = keyup$.pipe(mergeMap( (e) => this.filterPeople(this.searchInput)));
  } 

  firstOption() {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe(e=> {  
        this.filterPeople(this.searchInput)
          .subscribe(r=>console.log(r)) 
      }); 
  }
}
