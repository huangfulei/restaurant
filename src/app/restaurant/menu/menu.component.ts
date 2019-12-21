import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from './ProductsService';
import {categories} from './categories';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public gridData: any[];
  public categories: any[] = categories;
  public formGroup: FormGroup;
  private editedRowIndex: number;
  public title: any;

  constructor(private service: ProductsService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.gridData = this.service.products();
    this.service.getMenu().subscribe(response => {
      console.log(response);
      this.gridData = response.results;
    });
  }

  public category(id: number): any {
    return this.categories.find(x => x.CategoryID === id);
  }

  public addHandler({sender}) {
    this.closeEditor(sender);

    this.formGroup = this.fb.group({
      id: [''],
      name: [''],
      price: ['']
    });

    sender.addRow(this.formGroup);
  }

  public editHandler({sender, rowIndex, dataItem}) {
    this.closeEditor(sender);

    this.formGroup = this.fb.group({
      id: [dataItem.id],
      name: [dataItem.name],
      price: [dataItem.price]
    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({sender, rowIndex}) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({sender, rowIndex, formGroup, isNew}): void {
    const product = formGroup.value;

    this.service.save(product, isNew).subscribe(data => {
      console.log(data);
    });

    sender.closeRow(rowIndex);
  }

  public removeHandler({dataItem}): void {
    this.service.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
