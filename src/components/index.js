import MyHeader from '@/components/MyHeader'

const components = {
    MyHeader
}

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};
export default install;
