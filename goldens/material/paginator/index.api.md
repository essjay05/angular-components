## API Report File for "@angular/material_paginator"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbstractControl } from '@angular/forms';
import { AbstractControlDirective } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { ControlValueAccessor } from '@angular/forms';
import { Directionality } from '@angular/cdk/bidi';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';
import { FocusOrigin } from '@angular/cdk/a11y';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import * as i1_2 from '@angular/cdk/a11y';
import * as i2 from '@angular/cdk/overlay';
import * as i2_2 from '@angular/cdk/observers';
import * as i5 from '@angular/cdk/scrolling';
import { InjectionToken } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgZone } from '@angular/core';
import { NumberInput } from '@angular/cdk/coercion';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Optional } from '@angular/core';
import { OriginConnectionPosition } from '@angular/cdk/overlay';
import { OverlayConnectionPosition } from '@angular/cdk/overlay';
import { OverlayRef } from '@angular/cdk/overlay';
import { QueryList } from '@angular/core';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ViewportRuler } from '@angular/cdk/scrolling';

// @public
export const MAT_PAGINATOR_DEFAULT_OPTIONS: InjectionToken<MatPaginatorDefaultOptions>;

// @public @deprecated
export const MAT_PAGINATOR_INTL_PROVIDER: {
    provide: typeof MatPaginatorIntl;
    deps: Optional[][];
    useFactory: typeof MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
};

// @public @deprecated
export function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl: MatPaginatorIntl): MatPaginatorIntl;

// @public
export class MatPaginator implements OnInit, OnDestroy {
    constructor(...args: unknown[]);
    protected _buttonClicked(targetIndex: number, isDisabled: boolean): void;
    _changePageSize(pageSize: number): void;
    color: ThemePalette;
    disabled: boolean;
    _displayedPageSizeOptions: number[];
    firstPage(): void;
    _formFieldAppearance?: MatFormFieldAppearance;
    getNumberOfPages(): number;
    hasNextPage(): boolean;
    hasPreviousPage(): boolean;
    hidePageSize: boolean;
    initialized: Observable<void>;
    // (undocumented)
    _intl: MatPaginatorIntl;
    lastPage(): void;
    get length(): number;
    set length(value: number);
    _nextButtonsDisabled(): boolean;
    nextPage(): void;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    static ngAcceptInputType_hidePageSize: unknown;
    // (undocumented)
    static ngAcceptInputType_length: unknown;
    // (undocumented)
    static ngAcceptInputType_pageIndex: unknown;
    // (undocumented)
    static ngAcceptInputType_pageSize: unknown;
    // (undocumented)
    static ngAcceptInputType_showFirstLastButtons: unknown;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    readonly page: EventEmitter<PageEvent>;
    get pageIndex(): number;
    set pageIndex(value: number);
    get pageSize(): number;
    set pageSize(value: number);
    readonly _pageSizeLabelId: string;
    get pageSizeOptions(): number[];
    set pageSizeOptions(value: number[] | readonly number[]);
    _previousButtonsDisabled(): boolean;
    previousPage(): void;
    selectConfig: MatPaginatorSelectConfig;
    showFirstLastButtons: boolean;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatPaginator, "mat-paginator", ["matPaginator"], { "color": { "alias": "color"; "required": false; }; "pageIndex": { "alias": "pageIndex"; "required": false; }; "length": { "alias": "length"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "hidePageSize": { "alias": "hidePageSize"; "required": false; }; "showFirstLastButtons": { "alias": "showFirstLastButtons"; "required": false; }; "selectConfig": { "alias": "selectConfig"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "page": "page"; }, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPaginator, never>;
}

// @public
export interface MatPaginatorDefaultOptions {
    formFieldAppearance?: MatFormFieldAppearance;
    hidePageSize?: boolean;
    pageSize?: number;
    pageSizeOptions?: number[];
    showFirstLastButtons?: boolean;
}

// @public
export class MatPaginatorIntl {
    readonly changes: Subject<void>;
    firstPageLabel: string;
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
    itemsPerPageLabel: string;
    lastPageLabel: string;
    nextPageLabel: string;
    previousPageLabel: string;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPaginatorIntl, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<MatPaginatorIntl>;
}

// @public (undocumented)
export class MatPaginatorModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPaginatorModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatPaginatorModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatPaginatorModule, never, [typeof MatButtonModule, typeof MatSelectModule, typeof MatTooltipModule, typeof MatPaginator], [typeof MatPaginator]>;
}

// @public
export interface MatPaginatorSelectConfig {
    disableOptionCentering?: boolean;
    panelClass?: string | string[] | Set<string> | {
        [key: string]: any;
    };
}

// @public
export class PageEvent {
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex?: number;
}

// (No @packageDocumentation comment for this package)

```
