import Aside from './src/main';

/* istanbul ignore next */
Aside.install = function(Vue) {
  Vue.component(Aside.name, Container);
};

export default Aside;
