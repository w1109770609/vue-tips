import ToastItem from './toastitem';
import './toast.scss'

let toasts = {
  install(Vue,options){
    const toastBus = new Vue({})
    Object.defineProperty(Vue.prototype,'$toast',{
      value: toastBus
    })
    Vue.component('Toast', {template: `<div class="toast">
        <transition-group name="toast">
            <ToastItem v-for="(item,index) in msgArr" :key="index">{{item}}</ToastItem>
        </transition-group>
      </div>`, data() {
        return {msgArr: []};
      }, components: {ToastItem}, mounted() {
        this.$toast.$on('activeShow', res => {
          this.msgArr.push(res);
        });
      }});
  }
}
export default toasts
