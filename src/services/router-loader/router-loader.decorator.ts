import 'reflect-metadata';
import { RouteInfo } from './route-info.interface';

// tslint:disable-next-line
export function Route(routeConfig: RouteInfo) {
  return (target: any) => {
    if (routeConfig.parent) {
      if (!routeConfig.parent.getRouteInfo) {
        throw new Error('The parent component do not have an Route config');
      }

      routeConfig.parent = routeConfig.parent.getRouteInfo();
    }

    Reflect.defineMetadata('router', routeConfig, target, 'route');
    target.getRouteInfo = (): RouteInfo => {
      return Reflect.getMetadata('router', target, 'route');
    };
  };
}
