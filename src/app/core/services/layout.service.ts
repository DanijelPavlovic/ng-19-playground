import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sidebarOpen: WritableSignal<boolean> = signal(true);

  toggleSidebarOpen(): void {
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  toggleDarkMode() {
    const element: HTMLHtmlElement | null = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
  }

  isDarkMode(): boolean {
    const element: HTMLHtmlElement | null = document.querySelector('html');
    return element?.classList.contains('my-app-dark') ?? false;
  }
}
