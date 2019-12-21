import {Injectable} from '@angular/core';
import {products} from './products';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductsService {
  private data: any[] = products;
  private counter: number = products.length;

  constructor(private http: HttpClient) {
  }

  public products(): any[] {
    return this.data;
  }

  public getMenu(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/restaurant/menu/`);
  }

  public remove(product: any): void {
    const index = this.data.findIndex(({ProductID}) => ProductID === product.ProductID);
    this.data.splice(index, 1);
  }

  public save(product: any, isNew: boolean): Observable<any> {
    if (isNew) {
      return this.http.post(`${environment.apiUrl}/restaurant/menu/`, product);
    } else {
      return this.http.put(`${environment.apiUrl}/restaurant/menu/${product.id}/`, product);

      Object.assign(
        this.data.find(({ProductID}) => ProductID === product.ProductID),
        product
      );
    }
  }
}
