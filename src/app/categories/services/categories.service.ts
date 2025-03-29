import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

export interface CategoryRequest {
  page?: number;
  limit?: number;
  search?: string;
  searchColumns?: string[];
}

export interface CategoryResponse {
  data: Category[];
  meta: {
    currentPage: number
    firstPage: number
    firstPageUrl: string
    lastPage: number
    lastPageUrl: string
    nextPageUrl: string
    perPage: number
    previousPageUrl?: string
    total: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  index(request: CategoryRequest): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(
      `${environment.apiUrl}/admin/categories?search=${request.search}&searchColumns[]=${request.searchColumns}&page=${request.page}&limit=${request.limit}`
    )
  }
}
