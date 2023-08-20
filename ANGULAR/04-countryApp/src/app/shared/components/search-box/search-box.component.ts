import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() public placeholder: string = '';
  @Input() public initialValue: string = '';
  @Output() public onValue: EventEmitter<string> = new EventEmitter();
  @Output() public onDebounce: EventEmitter<string> = new EventEmitter();
  @ViewChild('txtInput') public searchInput!: ElementRef;

  private debounce: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  ngOnInit(): void {
    this.debounceSubscription = this.debounce
      .pipe(
        debounceTime(500)
      )
      .subscribe( value =>{
        this.onDebounce.emit( value );
      })
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  sendTextInput(){
    const textValue = this.searchInput.nativeElement.value;
    if(textValue.length === 0) return;
    this.onValue.emit(textValue);
  }

  onKeyPress( searchTerm: string ){
    this.debounce.next( searchTerm );
  }
}
