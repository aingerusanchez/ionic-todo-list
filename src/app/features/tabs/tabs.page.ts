import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: true,
    imports: [IonicModule, NgIf]
})
export class TabsPage {

  constructor(private router: Router) {}

  public navigateHome() {
    this.router.navigate(['tabs/home']);
  }

}
