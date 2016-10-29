import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { SiteComponent } from "../site/site.component";
import{AuthenticationService} from "../site/AuthenticationService";


@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

@NgModule({
providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {
	public user: User;
	public isUserAuthenticated = false;
	// For testing we are going to use Dummy Configuration.
	// Actual data will come from Rest Service

	
	private dummyConfiguration:Object={
		"user":"dummy",
		"component":[{
                  "name":"CustomerComponent",
				  "access":"ENABLED"
		},
		{
			  "name":"InvoicingComponent",
				  "access":"HIDDEN"
			
		}

		]
	};

	constructor(private router: Router,private authenticationService : AuthenticationService) {
		this.user = new User();
	}

	login() {
		this.isUserAuthenticated = true;
		this.authenticationService.saveInSession(this.dummyConfiguration);
		this.router.navigate(['/site', {}]);
	}

	ngOnInit() {
	}
}

export class User {
	public email: string;
	public password: string;
}
