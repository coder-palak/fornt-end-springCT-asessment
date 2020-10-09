import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  companyList:any;
  selectValue:any;
  constructor(private baseService:BaseService,public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.baseService.getUserList().subscribe(res=>{
      console.log(res)
      this.companyList = res
    },err=>{
      alert(err.message)
    })
  }
  changes(value){
    console.log(value)
   this.selectValue = value; 
  }
  dialogClose(){
    this.dialogRef.close({
      userId:this.selectValue
    })
  }

}
