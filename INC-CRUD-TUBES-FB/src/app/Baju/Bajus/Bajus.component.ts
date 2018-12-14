import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ClothService } from '../../shared/cloth.service'
import { CategoryService } from '../../shared/category.service';
import { NotificationService } from '../../shared/notification.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-Bajus',
  templateUrl: './Bajus.component.html',
  styleUrls: ['./Bajus.component.css']
})
export class BajusComponent implements OnInit {

  constructor(private service : ClothService,
              private categoryService : CategoryService,
              private notificationService: NotificationService,
              public dialogRef : MatDialogRef<BajusComponent>) { }


  ngOnInit() {
    this.service.getBajus();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit() { 
    if(this.service.form.valid) { 
      if (!this.service.form.get('$key').value)
      this.service.insertBaju(this.service.form.value);
      else
      this.service.updateBaju(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Yay Success Submiting'); 
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
