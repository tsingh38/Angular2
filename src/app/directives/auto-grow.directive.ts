import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[autoGrow]',
  host:{
    '(focus)':'onFocus()',
    '(blur)':'onBlur()'
  }
})
export class AutoGrowDirective {
  _el:ElementRef;

constructor(el:ElementRef,private renderer:Renderer){
this._el=el;
}
onFocus(){
this.renderer.setElementStyle(this._el.nativeElement,'width','200');
}

onBlur(){
this.renderer.setElementStyle(this._el.nativeElement,'width','120');
}
 

}
