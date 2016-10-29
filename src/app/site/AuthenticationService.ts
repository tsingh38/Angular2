
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

    isComponentAllowed(component:string){
       var result:Array<Object>;
       if(this.userConfiguration=={}){
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

// export class UserConfig {
//     private username: String;
//     private listOfComponents: Array<Component>;

    
//     getUserConfig(data: Object) {
//         return this.serialise(this, data.toString());
//     }



//     hasComponent(nameOfComponent: Object) {
//         for (var i = 0; i < this.listOfComponents.length; i++) {
//             if (this.listOfComponents[i].name == nameOfComponent) {
//                 return true;
//             }
//             return false;
//         }
//     }


//         serialise(user :UserConfig, data:string){
//             var jsonObj = JSON.parse(data);

//             if (typeof user["fromJSON"] === "function") {
//                 user["fromJSON"](jsonObj);
//             }
//             else {
//                 for (var propName in jsonObj) {
//                     user[propName] = jsonObj[propName]
//                 }
//             }

//             return user;
//         }


//     }
 enum AccessType {
     ENABLED=<any>"ENABLED",
     HIDDEN=<any>"HIDDEN"

 
 }
   