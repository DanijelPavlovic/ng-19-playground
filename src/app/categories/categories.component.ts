import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DatePipe, NgIf} from '@angular/common';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {rxResource} from '@angular/core/rxjs-interop';
import {catchError, distinctUntilChanged, map} from 'rxjs';
import {CategoriesService, CategoryRequest, CategoryResponse} from './services/categories.service';
import {Paginator, PaginatorState} from 'primeng/paginator';


@Component({
  selector: 'app-categories',
  imports: [
    FormsModule,
    TableModule,
    DatePipe,
    FloatLabel,
    InputText,
    Paginator,
    NgIf
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categoryService: CategoriesService = inject(CategoriesService)

  page = signal(1)
  limit = signal(5)
  searchTerm = signal<string>('')
  searchColumns = ['name'];

  categoriesRx = rxResource<CategoryResponse, CategoryRequest>({
    request: (): CategoryRequest => ({
      search: this.searchTerm(),
      searchColumns: this.searchColumns,
      page: this.page(),
      limit: this.limit()
    }),
    loader: ({request}) =>
      this.categoryService.index(request).pipe(
        distinctUntilChanged(),
        map((response: CategoryResponse): CategoryResponse => response),
        catchError(() => {
          throw Error('Unable to load categories!');
        })
      ),
  });

  handlePagination(event: PaginatorState) {
    this.limit.set(event.rows || 5)
    this.page.set(event.page ? event.page + 1 : 1)
  }

}
