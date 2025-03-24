import {Injectable, signal, WritableSignal} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sidebarOpen: WritableSignal<boolean> = signal<boolean>(true);
  isMobile: WritableSignal<boolean> = signal<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeMobileView();
  }

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

  private observeMobileView(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result: BreakpointState): void => {
      this.isMobile.set(result.matches);
      this.sidebarOpen.set(!result.matches);
    });
  }
}
