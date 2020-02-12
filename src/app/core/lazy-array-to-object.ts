import { NgModuleFactory, Type } from '@angular/core';

export const lazyLoadWidgets: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'lazy-left-widget',
    loadChildren: () => import('../components/widget-left-lazy/widget-left-lazy.module').then(m => m.WidgetLeftLazyModule)
  },
  {
    path: 'lazy-right-widget',
    loadChildren: () => import('../components/widget-right-lazy/widget-right-lazy.module').then(m => m.WidgetRightLazyModule)
  }
];

export function lazyArrayToObject() {
  const result = {};
  for (const lazy of lazyLoadWidgets) {
    result[lazy.path] = lazy.loadChildren;
  }
  return result;
}
