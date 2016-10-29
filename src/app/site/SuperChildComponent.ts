import { AuthenticationService } from './AuthenticationService';
export class SuperChildComponent {
    public allowed: boolean = false;
    private superAuthenticationService:AuthenticationService;


    constructor(authenticationService: AuthenticationService) {
        this.superAuthenticationService = authenticationService;
    }

    isAllowed(component: string) {
        this.allowed = this.superAuthenticationService.isAuthentic(component);
    }

}