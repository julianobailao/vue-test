import { Vue } from 'vue-property-decorator';

export interface RouteInfo {
  readonly path: string;
  readonly name: string;
  meta?: any;
  parent?: RouteInfo | Vue | any;
  getRouteInfo?: () => RouteInfo;
}
