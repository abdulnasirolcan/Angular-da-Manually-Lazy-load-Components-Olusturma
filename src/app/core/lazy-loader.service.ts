import { Injectable, Injector, Compiler, Inject, NgModuleFactory, Type, ViewContainerRef } from '@angular/core';
import { LAZY_LOAD_WIDGET } from './injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {

  constructor(
    private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_LOAD_WIDGET) private lazyLoadWidgets: { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> }
  ) { }

  async load(name: string, container: ViewContainerRef) {
    
    const tempModule = await this.lazyLoadWidgets[name]();
    
    const moduleFactory =
      tempModule instanceof NgModuleFactory
        ? tempModule // For AOT
        : await this.compiler.compileModuleAsync(tempModule);  // For JIT

    const entryComponent = (moduleFactory.moduleType as any).entry;

    const moduleRef = moduleFactory.create(this.injector);

    container.clear();
    
    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

    container.createComponent(compFactory);
  }
}
