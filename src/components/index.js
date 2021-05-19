import MyHeader from '@/components/MyHeader'
import MyInput from '@/components/MyInput'
import MyButton from '@/components/MyButton'
import MyNavtab from '@/components/MyNavtab/MyNavtab.vue'

const components = {
    MyHeader,
    MyInput,
    MyButton,
    MyNavtab
}

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};
export default install;
