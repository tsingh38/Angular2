import { Component ,NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LocalStorageService} from "angular2-localstorage/LocalStorageEmitter";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

@NgModule({

  providers: [LocalStorageService]
})
export class AppComponent {
  constructor(storageService: LocalStorageService){}
}
