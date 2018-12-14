import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
 

import { AppComponent } from './app.component';
import { BajuComponent } from './Baju/Baju.component';
import { BajusComponent } from './Baju/Bajus/Bajus.component'
import { BajuListComponent } from './Baju/Baju-list/Baju-list.component';
import { ClothService } from './shared/cloth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment'
import { CategoryService } from './shared/category.service';
import { from } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
   declarations: [
      AppComponent,
      BajuComponent,
      BajusComponent,
      BajuListComponent,
      DialogComponent
   ],
   imports: [
      BrowserModule,
      MaterialModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      FormsModule
   ],
   providers: [
      ClothService,
      CategoryService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      BajusComponent, DialogComponent
   ]
})
export class AppModule { }
