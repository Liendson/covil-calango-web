import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../../../services/nav.service';
import { NavItem } from './nav-item';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-nav-item',
  imports: [TranslateModule, TablerIconsModule, MaterialModule, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppNavItemComponent implements OnChanges {
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notificacoesLidas: EventEmitter<void> = new EventEmitter<void>();

  @Input() item: NavItem | any;
  @Input() notificacoesPendentes: number = 0;

  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() depth: any;

  constructor(public navService: NavService, public router: Router) {}

  ngOnChanges() {
    const url = this.navService.currentUrl();
    if (this.item.route && url) {
      this.expanded = url.indexOf(`/${this.item.route}`) === 0;
      this.ariaExpanded = this.expanded;
    }
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);

      if (item.displayName === 'Solicitações') {
        this.notificacoesLidas.emit();
      }
    }

    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }

    window.scroll({ top: 0, left: 0, behavior: 'smooth' });

    if (!this.expanded && window.innerWidth < 1024) {
      this.notify.emit();
    }
  }


}

