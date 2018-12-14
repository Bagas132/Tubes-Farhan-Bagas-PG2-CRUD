import { Component, OnInit, ViewChild } from '@angular/core';
import { ClothService } from '../../shared/cloth.service';
import { CategoryService } from '../../shared/category.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NotificationService } from '../../shared/notification.service';
import { BajusComponent } from '../Bajus/Bajus.component';
import { DialogService } from '../../shared/dialog.service';


@Component({
  selector: 'app-Baju-list',
  templateUrl: './Baju-list.component.html',
  styleUrls: ['./Baju-list.component.css']
})
export class BajuListComponent implements OnInit {

  constructor(private service : ClothService,
              private categoryService : CategoryService,
              private dialog: MatDialog,
              private notificationService: NotificationService,
              private dialogService : DialogService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['model', 'size', 'price', 'stock', 'gender', 'categoryName', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getBajus().subscribe(
      list => { 
        let array = list.map(item => {
          let categoryName = this.categoryService.getCategoryName(item.payload.val()['category']);
          return { 
            $key: item.key,
            categoryName,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  onSearchList() { 
    this.searchKey = " ";
    this.applyFilter();
  }

  applyFilter() { 
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(BajusComponent,dialogConfig);
  }

  onEdit(row){ 
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(BajusComponent,dialogConfig);
  }

  onDelete($key){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteBaju($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }
}
