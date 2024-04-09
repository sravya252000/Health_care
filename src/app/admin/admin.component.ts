import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  admindelete:boolean=false;
  adminUpdate:boolean=false;
  constructor(){}
delete()
{
  this.admindelete=!this.admindelete;
}
updateOrAdd()
{
  this.adminUpdate=!this.adminUpdate
}
ngOnInit() {
  console.log('Init in parent');
}

ngOnChanges() {
  console.log('Onchanges in parent');
}

ngDoCheck() {
  console.log('DoCheck in parent');
}

ngAfterContentInit() {
  console.log('Content init in parent');
}

ngAfterContentChecked() {
  console.log('Content checked in parent');
}

ngAfterViewInit() {
  console.log('View init in parent');
}

ngAfterViewChecked() {
  console.log('View Checked in parent');
}

ngOnDestroy() {
  console.log('Destroy in parent');
}
destroy: boolean = true;
  destroyfunction() {
    this.destroy = !this.destroy;
  }
  updatedestroy:boolean=true;
  destroyUpdatefunction() {
    this.updatedestroy = !this.updatedestroy;
  }
}
