<template>
<div class="header">
 <div class="header-box">
   <div class="head-imgbox">
     <img class="img" src="https://img.xiaopiu.com/userImages/img720164a2cd2a00.png">
     <div class="head-identity">
       <p>{{baseinfo.nick}}</p>
       <div class="">
         <span>{{baseinfo.identity}}</span>
         <span>保密</span>
       </div>
     </div>
   </div>
   <div class="head-info">
      <div v-for="(item, index) in moreinfo" :key="item+index">
        <p>{{ item.data }}</p>
        <p>{{ item.name }}</p>
      </div>
   </div>
 </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      baseinfo: {
        identity: '学生',
        nick: 'Nann',
      },
      moreinfo: [
        {
          name: '时长',
          data: '1h',
        },
        {
          name: '经验',
          data: '15',
        },
        {
          name: '积分',
          data: '1',
        },
        {
          name: '关注',
          data: '10',
        },
        {
          name: '粉丝',
          data: '1',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import "~assets/css/login/login-common.styl"

header-height=190px;
header-main-height=150px;
image-box-left=90px;
image-height=140px;

.header {
  width 100%;
  height header-height;
  position relative;
  .header-box{
    height header-main-height;
    background-size cover;
    background-image url("https://img.xiaopiu.com/userImages/img719164a2cc89d8.png");

    // 左边
    .head-imgbox{
      width 500px
      left image-box-left;
      position absolute;
      bottom 22px;

      .img{
        //width 125px
        height image-height;
        border-radius 50%;
        float left;
      }

      .head-identity{
        margin-top 15px;
        float left
        margin-left 20px;

        p{
          margin 4px 0;
          font-size 26px;
          color white
        }

        div {
          width 120px
          span{
            font-size 18px;
            margin-right 20px;
            color white;
          }
        }
      }
    }

    // 右边
    .head-info{
      float right
      height header-main-height
      margin-right image-box-left
      //width 700px;
      display flex;
      justify-content flex-start
      align-items center
      div{
        //width 30px;
        height 50px;
        margin 0 30px;

        p{
          text-align center
          //width 10px
          //display inline
          color white;
        }
      }
    }
  }
}
</style>
