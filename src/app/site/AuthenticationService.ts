
import { LocalStorage, SessionStorage } from "angular2-localstorage/WebStorage";
export class AuthenticationService {


    @SessionStorage() public userConfiguration: Object;

    isAuthentic(component: string):boolean {
        if (this.isComponentAllowed(component)){
            return true;
        }
    }

    public getUserConfiguration():Object {
        return this.userConfiguration;
    }

    saveInSession(data: Object) {
        this.userConfiguration = data;
    }

    isUserLoggedIn():boolean{
        if(this.userConfiguration==null){
            return false;
        }
        return true;
    }

    inValidateSession(){
        this.userConfiguration={};
    }

    isComponentAllowed(component:string){
       var result:Array<Object>;
       if(this.userConfiguration==null){
           return false;
       }
       if(this.userConfiguration.hasOwnProperty("component")){
           result=this.userConfiguration["component"];
           for (var i = 0; i < result.length; i++) {
               var currentComponent:Object=result[i];
            if (currentComponent["name"] ==component && currentComponent["access"]== AccessType.ENABLED) {
                 return true;
            }
       }
    }
    return false;
    
      
}

}

 enum AccessType {
     ENABLED=<any>"ENABLED",
     HIDDEN=<any>"HIDDEN"

 
 }
   