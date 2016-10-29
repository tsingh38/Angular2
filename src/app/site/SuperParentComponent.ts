import { Router } from '@angular/router';
import { AuthenticationService } from './AuthenticationService';

export class SuperParentComponent {


constructor(){
    
}
    validateSession( router: Router,  authenticationService: AuthenticationService) {
        if (!authenticationService.isUserLoggedIn()) {
            router.navigate(['/login', {}]);
        }
    }
}