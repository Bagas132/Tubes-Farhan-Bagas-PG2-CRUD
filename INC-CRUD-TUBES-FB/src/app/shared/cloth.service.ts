import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor(private firebase: AngularFireDatabase) { }

  bajuList : AngularFireList<any>;
  
  form : FormGroup = new FormGroup({
    $key : new FormControl(null),
    model : new FormControl(' ', Validators.required),
    size  : new FormControl(' ', Validators.required),
    price : new FormControl(' ', Validators.required),
    stock : new FormControl(' ', Validators.required),
    gender: new FormControl('1'),
    category: new FormControl(0),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      model: '',
      size: '',
      price: '',
      stock: '',
      gender: 'male',
      category: 0,
    });
  }

  getBajus() { 
    this.bajuList = this.firebase.list('Baju');
    return this.bajuList.snapshotChanges();
  }

  insertBaju(baju) { 
    this.bajuList.push({
      model : baju.model,
      size  : baju.size,
      price : baju.price,
      stock : baju.stock,
      gender: baju.gender,
      category : baju.category
    });
  }

  updateBaju(baju){ 
    this.bajuList.update(baju.$key,
      {
      model: baju.model,
      size  : baju.size,
      price : baju.price,
      stock : baju.stock,
      gender: baju.gender,
      category : baju.category
      });
  }

  deleteBaju($key: string) {
    this.bajuList.remove($key);
  }

  populateForm(Bajus) { 
    this.form.setValue(_.omit(Bajus,'categoryName'));
  }
}
