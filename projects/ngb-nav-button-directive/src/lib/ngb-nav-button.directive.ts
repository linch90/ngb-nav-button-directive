import { Attribute, Directive } from '@angular/core';
import { NgbNavItem, NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'button[ngbNavButton]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[id]': 'navItem.domId',
    '[class.nav-link]': 'true',
    '[class.nav-item]': 'hasNavItemClass()',
    '[attr.role]': `role ? role : nav.roles ? 'tab' : undefined`,
    '[class.active]': 'navItem.active',
    '[class.disabled]': 'navItem.disabled',
    '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
    '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
    '[attr.aria-selected]': 'navItem.active',
    '[attr.aria-disabled]': 'navItem.disabled',
    '(click)': 'nav.click(navItem); $event.preventDefault()',
  },
})
export class NgbNavButtonDirective {
  constructor(
    @Attribute('role') public role: string,
    public navItem: NgbNavItem,
    public nav: NgbNav
  ) {}

  hasNavItemClass() {
    // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
    return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
  }
}
