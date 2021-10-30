import { Route, RouterOptions } from '../shared/interfaces';

class Router {
  routes: Route[] = [];

  // mode = null;

  root = '/';

  interval: NodeJS.Timeout;

  current?: string;

  constructor(options: RouterOptions) {
    //   this.mode = window.history.pushState ? 'history' : 'hash';
    //   if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;
    this.interval = setInterval(this.intervalCb, 50);
    // this.listen();
  }

  add = (path: string, cb: () => void) => {
    this.routes.push({ path, cb });
    return this;
  };

  remove = (path: string) => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };

  clearSlashes = (path: string) =>
    path.toString().replace(/\/$/, '').replace(/^\//, '');

  getFragment = () => {
    let fragment = '';
    // if (this.mode === "history") {
    fragment = this.clearSlashes(
      decodeURI(window.location.pathname + window.location.search),
    );
    fragment = fragment.replace(/\?(.*)$/, '');
    fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    // } else {
    //   const match = window.location.href.match(/#(.*)$/);
    //   fragment = match ? match[1] : "";
    // }
    return this.clearSlashes(fragment);
  };

  navigate = (path = '') => {
    // if (this.mode === "history") {
    window.history.pushState(
      null,
      '' /*null*/,
      this.root + this.clearSlashes(path),
    );
    // } else {
    //   window.location.href = `${window.location.href.replace(
    //     /#(.*)$/,
    //     ""
    //   )}#${path}`;
    // }
    return this;
  };

  //   listen = () => {
  //     clearInterval(this.interval);
  //     this.interval = setInterval(this.intervalCb, 50);
  //   };

  intervalCb = () => {
    if (this.current === this.getFragment()) {
      return;
    }
    this.current = this.getFragment();
    console.log('yaya');
    this.routes.some((route) => {
      const match = this.current?.match(route.path);
      console.log(match);
      if (match) {
        match.shift();
        route.cb();
        return match;
      }
      return false;
    });
  };
}

export default Router;
