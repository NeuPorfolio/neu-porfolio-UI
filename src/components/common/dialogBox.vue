// 对话框
<template>
  <div class="dialog"  v-if="isShow">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="dialog-cover"  @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <!--style 通过props 控制内容的样式  -->
      <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}"  v-if="isShow">
        <div class="dialog_head">
          <!--弹窗头部 title-->
          <slot name="header">提示信息</slot>
        </div>
        <div class="" :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
          <!--弹窗的内容-->
          <slot name="main">弹窗内容</slot>
        </div>
        <!--弹窗关闭按钮-->
        <div  class="close" @click="closeMyself">
          <button class="close_button">X</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dialogBox',
  props: {
    isShow: {
      // 弹窗组件是否显示 默认不显示
      type: Boolean,
      default: false,
      required: true, // 必须
    },
    // 下面这些属性会绑定到div上面 详情参照上面的html结构
    // 如： :style="{top:topDistance+'%',width:widNum+'%'}"
    widNum: {
      // 内容宽度
      type: Number,
      default: 86.5,
    },
    leftSite: {
      // 左定位
      type: Number,
      default: 6.5,
    },
    topDistance: {
      // top上边距
      type: Number,
      default: 35,
    },
    pdt: {
      // 上padding
      type: Number,
      default: 0,
    },
    pdb: {
      // 下padding
      type: Number,
      default: 0,
    },
  },
  methods: {
    closeMyself() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
 /*最外层 设置position定位*/
.dialog {
  position: absolute;
  color: #2e2c2d;
  font-size: 16px;
}
 .head{
   width: 200px;
   padding: 20px;
   background-color: #00b38a;
 }
 /*遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
   .dialog-cover {
     background: rgba(0,0,0, 0.8);
     position: fixed;
     z-index: 200;
     top: 0;
     left: 0;
     width: 101%;
     height: 101%;
   }
 /*内容层 z-index要比遮罩大，否则会被遮盖，*/
   .dialog-content{
     position: fixed;
     top: 35%;
   /* 移动端使用felx布局*/
   display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     z-index: 300;
   }
   .close {
      margin-top: 30px;
   }
   .close_button {
     border-radius: 30px;
     background-color: white;
     width: 80px;
     height: 40px;
     font-size: large;
     cursor: pointer;
   }
</style>
