import { RouteInfo } from './route-info.interface';
import { RouteConfig } from 'vue-router';

export class RouteInfoIMPL implements RouteInfo {
  constructor(
    readonly fileName: string,
    readonly path: string,
    readonly name: string,
    readonly parent?: RouteInfo,
    readonly meta?: any,
  ) {}

  get component(): () => any {
    return () => import(`../../${this.fileName.split('./').pop()}`);
  }

  get routeConfig(): RouteConfig {
    return {
      path: this.path,
      name: this.name,
      meta: this.meta,
      component: this.component,
    };
  }

  get nestLevel() {
    let count = 0;
    // tslint:disable-next-line
    let parentRoute: RouteInfo = this;

    while (typeof parentRoute.parent === 'object') {
      count += 1;
      if (parentRoute.parent) {
        parentRoute = parentRoute.parent;
      }
    }

    return count;
  }
}
