import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BaseService } from '../services/base.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'username', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(private baseService: BaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUser();

  }
  getUser() {
    this.baseService.getUsers().subscribe(res => {
      this.dataSource = res;
    }, err => {
      alert(err.message)
    })
  }
  openDialog(companyId) {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(data => {
      this.assisgnUser(companyId, data.userId);
    })
  }

  assisgnUser(companyId,userId) {
    this.baseService.assisgnUser(companyId,userId).subscribe(res => {
      alert(res.message);
      this.getUser();
    }, err => {
      alert(err.message)
    })
  }
}
