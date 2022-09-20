import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  //item used to hold values from parent
  @Input() item:string|undefined

  @Output() onCancel = new EventEmitter()

  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }
delete(){
this.onDelete.emit(this.item)
}
}