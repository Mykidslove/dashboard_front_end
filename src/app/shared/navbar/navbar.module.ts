import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [RouterModule, CommonModule, NgbModule ]
})

export class NavbarModule {}
