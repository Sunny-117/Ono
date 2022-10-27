import ConsCard from '@/components/common/Card';
import ConsItem from '@/components/common/ConsItem';
import Summary from '@/components/common/Summary';

let MyPlugin = {};

MyPlugin.install = function (Vue) {
  Vue.component(ConsCard.name, ConsCard);
  Vue.component(ConsItem.name, ConsItem);
  Vue.component(Summary.name, Summary);
}

export default MyPlugin;