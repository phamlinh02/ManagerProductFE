import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Category } from 'src/app/model/Category';
import { Product } from 'src/app/model/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Unit } from 'src/app/model/Unit';
import { MadeBy } from 'src/app/model/MadeBy';
import { MadeService } from 'src/app/services/made.service';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit {
  productDialog!: boolean;
  createNew: boolean = false;

  products!: Product[];

  product!: Product;

  category: Category[] = [];
  units: Unit[] = [];
  mades: MadeBy[] = [];

  selectedProducts!: Product[];

  submitted!: boolean;

  statuses!: any[];
  selectedCategory!: string;
  selectedUnit!: string;
  selectedMade!: string;
  selectedDisable : number =0;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private categoryService: CategoryService,
    private madeService: MadeService,
    private unitService: UnitService
  ) {}

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }

  openNew() {
    this.submitted = false;
    this.product = new Product()
    this.createNew = true;
    this.fillCbo();
  }

  fillCbo() {
    this.productService
      .getListCategory()
      .subscribe((data) => (this.category = data));
    this.unitService.getListUnit().subscribe((data) => (this.units = data));
    this.madeService.getListMade().subscribe((data) => (this.mades = data));
  }

  editProduct(product: Product) {
    this.createNew = false;
    this.product = { ...product };
    this.productDialog = true;
    this.fillCbo();
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.proName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deleteProduct(product).subscribe(
          (result) => {
            console.log(result);
            this.logMess('success', 'Successful', 'Product is delete');
            this.ngOnInit();
          },
          (error) => {
            console.log(error);
            this.logMess('fail', 'Have a problem', 'Fail to delete product');
          }
        );

      },
    });
  }

  logMess(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000,
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.createNew = false;
    this.submitted = false;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].proId === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  updateProduct(form: NgForm, product: Product) {
    product.proName = form.value.proName;
    product.price = form.value.price;
    product.quantity = form.value.quantity;
    product.unitName = form.value.unit;

    if(this.selectedCategory){
      this.product.cateName = this.selectedCategory;
    }
    if(this.selectedDisable){
      this.product.disable = this.selectedDisable;
    }
    if(this.selectedMade){
      this.product.madeName = this.selectedMade;
    }

    console.log(this.product);
    

    this.productService.updateProduct(product).subscribe(
      (result) => {
        console.log(result);
        this.logMess('success', 'Successful', 'Product is update');
        this.product = new Product();
        this.hideDialog()
        return true;
      },
      (error) => {
        console.log(error);
        this.logMess('danger', 'Have a problem', 'Fail to update product');
        return false;
      }
    );
  }

  saveProduct(form: NgForm) {

    this.product = new Product();

    this.product.cateName = form.value.cateName;
    this.product.madeName = this.selectedMade;
    this.product.cateName = this.selectedCategory;
    this.product.price = form.value.price;
    this.product.quantity = form.value.quantity;
    this.product.unitName = form.value.unit;
    this.product.disable = this.selectedDisable;
    this.product.proName = form.value.proName;

    console.log(this.product);
    
    this.productService.saveProduct(this.product).subscribe(
      (result) => {
        console.log(result);
        this.logMess('success', 'Successful', 'Product is save');
        this.product = new Product();
        this.hideDialog()
        return true;
      },
      (error) => {
        console.log(error);
        this.logMess('danger', 'Have a problem', 'Fail to save product');
        return false;
      }
    );
  }
}
