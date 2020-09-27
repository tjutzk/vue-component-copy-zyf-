<template>
    <div 
    class="lm-popup-wrap" 
    :class="position"
    v-show="isPopupshow">
        <transition name="popupMask">
            <div class="lm-popup-mask" v-show="isPopupshow" @click="handlePopupHide"></div>
        </transition>
        <transition :name="transition">
            <div class="lm-popup-body" v-show="isPopupshow" :class="position">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props:{
        // 是否可以通过点击遮罩关闭弹出层
        closeByMask:{
            type:Boolean,
            default:true
        },
        // 弹出层位置 center top bottom left right
        position:{
            type:String,
            default:'center'
        },
        transition:{
            type:String,
            default(){
                switch (this.position) {
                    case 'top':
                        return 'slide-down'
                    case 'bottom':
                        return 'slide-up' 
                    case 'left':
                        return 'slide-right' 
                    case 'right':
                        return 'slide-left' 
                    default:
                        return 'fade' 
                }
            }
        }
    },
    data(){
        return{
            isPopupshow:false
        }
    },
    methods:{
        show(){
            this.isPopupshow = true
        },
        hide(){
            this.isPopupshow = false
        },
        handlePopupHide(){
            this.closeByMask && this.hide()
        }
    }
}
</script>
<style scoped>
    .lm-popup-wrap{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .lm-popup-mask{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 1;
        opacity: 1;
    }
    .lm-popup-body{
        position: absolute;
        background-color: #ffffff;
        z-index: 10;
        overflow: auto;
        opacity: 1;
    }
    .lm-popup-body.center{
        width: 200px;
        max-height: 300px;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
    .lm-popup-body.top, .lm-popup-body.bottom{
        width: 100%;
        max-height: 250px;
        transition: all 0.3s;
    }
    .lm-popup-body.left{
        height: 100%;
        max-width: 50%;
        transition: all 0.3s;
    }
    .lm-popup-body.right{
        height: 100%;
        max-width: 50%;
        transition: all 0.3s;
    }
    .lm-popup-body.top, .lm-popup-body.left{
        top: 0;
        left: 0;
    }
    .lm-popup-body.bottom{
        bottom: 0;
        left: 0;
    }
    .lm-popup-body.right{
        top: 0;
        right: 0;
    }
    .popupMask-enter, .popupMask-leave-to{
        opacity: 0;
    }
    .popupMask-enter-active, .popupMask-leave-active{
        transition: opacity 0.3s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active{
        transition: opacity 0.5s;
    }
    .slide-down-enter-active, .slide-down-leave-active,
    .slide-up-enter-active, .slide-up-leave-active,
    .slide-right-enter-active, .slide-right-leave-active,
    .slide-left-enter-active, .slide-left-leave-active{
        transform: translate3d(0, 0, 0);
    }
    .slide-down-leave{
        transform: translate3d(0, 0, 0);
    }
    .slide-down-enter, .slide-down-leave-to{
        transform: translate3d(0,-100%,0);
        -webkit-transform: translate3d(0, -100%, 0);
    }
    .slide-up-enter, .slide-up-leave-to{
        transform: translate3d(0, 100%, 0);
    }
    .slide-right-enter, .slide-right-leave-to{
        transform: translate3d(-100%, 0, 0);
    }
    .slide-left-enter, .slide-left-leave-to{
        transform: translate3d(100%, 0, 0);
    }
</style>

