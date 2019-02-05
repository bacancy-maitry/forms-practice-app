import { Directive, Input, HostBinding, SimpleChange, SimpleChanges } from '@angular/core';

enum Cards {
  VISA = "https://goo.gl/LGPfq1",
  MASTERCARD = "https://goo.gl/MuURXJ",
  RUPAYEE = "https://goo.gl/atT6om",
  OTHER = "https://goo.gl/w1nXfy"
};

@Directive({
  selector: '[appEmployee]'
})

export class EmployeeDirective {

  @Input() empoyeeId: string;
  @HostBinding('src') imageSource;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.imageSource = this.getEmployeeData();
  }

  getEmployeeData() {
    if (this.empoyeeId) {
      if (this.empoyeeId == "employee1") {
        return Cards.VISA;
      } else if (this.empoyeeId == "employee2") {
        return Cards.MASTERCARD;
      } else if (this.empoyeeId == "employee3") {
        return Cards.RUPAYEE
      } else {
        return Cards.OTHER;
      }
    } else {
      return Cards.OTHER;
    }
  }

}
