/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  ViewEncapsulation,
  TemplateRef,
  AfterViewInit,
  inject,
} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatStepLabel} from './step-label';
import {MatStepperIntl} from './stepper-intl';
import {MatStepperIconContext} from './stepper-icon';
import {CdkStepHeader, StepState} from '@angular/cdk/stepper';
import {_StructuralStylesLoader, MatRipple, ThemePalette} from '../core';
import {MatIcon} from '../icon';
import {NgTemplateOutlet} from '@angular/common';
import {_CdkPrivateStyleLoader, _VisuallyHiddenLoader} from '@angular/cdk/private';

@Component({
  selector: 'mat-step-header',
  templateUrl: 'step-header.html',
  styleUrl: 'step-header.css',
  host: {
    'class': 'mat-step-header',
    '[class]': '"mat-" + (color || "primary")',
    'role': 'tab',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatRipple, NgTemplateOutlet, MatIcon],
})
export class MatStepHeader extends CdkStepHeader implements AfterViewInit, OnDestroy {
  _intl = inject(MatStepperIntl);
  private _focusMonitor = inject(FocusMonitor);

  private _intlSubscription: Subscription;

  /** State of the given step. */
  @Input() state: StepState;

  /** Label of the given step. */
  @Input() label: MatStepLabel | string;

  /** Error message to display when there's an error. */
  @Input() errorMessage: string;

  /** Overrides for the header icons, passed in via the stepper. */
  @Input() iconOverrides: {[key: string]: TemplateRef<MatStepperIconContext>};

  /** Index of the given step. */
  @Input() index: number;

  /** Whether the given step is selected. */
  @Input() selected: boolean;

  /** Whether the given step label is active. */
  @Input() active: boolean;

  /** Whether the given step is optional. */
  @Input() optional: boolean;

  /** Whether the ripple should be disabled. */
  @Input() disableRipple: boolean;

  /**
   * Theme color of the step header. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  @Input() color: ThemePalette;

  constructor(...args: unknown[]);

  constructor() {
    super();

    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    const changeDetectorRef = inject(ChangeDetectorRef);
    this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Focuses the step header. */
  override focus(origin?: FocusOrigin, options?: FocusOptions) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }

  /** Returns string label of given step if it is a text label. */
  _stringLabel(): string | null {
    return this.label instanceof MatStepLabel ? null : this.label;
  }

  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel(): MatStepLabel | null {
    return this.label instanceof MatStepLabel ? this.label : null;
  }

  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  _getDefaultTextForState(state: StepState): string {
    if (state == 'number') {
      return `${this.index + 1}`;
    }
    if (state == 'edit') {
      return 'create';
    }
    if (state == 'error') {
      return 'warning';
    }
    return state;
  }
}
