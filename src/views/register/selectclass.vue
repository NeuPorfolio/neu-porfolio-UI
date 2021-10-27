<template>
  <div class="background wrap flex">
    <div class="box">
      <p>请完善身份信息</p>
      <div class="imgbox">
        <img src="https://img.xiaopiu.com/userImages/img328164da748e08.jpeg" alt="head">
      </div>
      <form  action="#" class="mainbox flex" @submit.prevent="()=>false" @keydown.enter.prevent="registersubmit()">
        <select v-model="info.object.selected" :class="info.object.isShowAlert?'textmain-showAlert':'textmain-hideAlert'" >
          <option disabled value="">请选择专业</option>
          <option v-for="(item,index) in info.object.list" :key="item+index">{{item}}</option>
        </select>
        <select v-model="info.class.selected" :class="info.class.isShowAlert?'textmain-showAlert':'textmain-hideAlert'">
          <option disabled value="">请选择班级</option>
          <option v-for="(item,index) in info.class.list" :key="item+index">{{item}}</option>
        </select>
        <input class="submitinput" type="submit" @click="registersubmit()" value="注册">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'selectclass',
  data() {
    return {
      info: {
        object: {
          list: [
            '计算机科学与技术', '软件工程', '大学英语I', '大学英语II',
          ],
          selected: '',
          isShowAlert: false,
        },
        class: {
          list: [
            '19001', '19002', '19003',
          ],
          selected: '',
          isShowAlert: false,
        },
      },
    };
  },
  methods: {
    // todo 修改为网络提交及验证
    registersubmit() {
      if (this.info.class.selected && this.info.object.selected) {
        this.$notify.success('注册成功！');
        this.$router.push({
          name: 'login',
        });
      }
    },
  },
};
</script>

<style scoped lang="stylus">
@import "~assets/css/login/login-common.styl"

.background{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,179,138,1);
}
.wrap {
  justify-content: center;
  align-items: center;
}

.box {
  background-color white;
  padding 18px;
  border-radius 5px;
  box-shadow 3px;
}

.imgbox {
  width:58px;
  height:58px;
  overflow:hidden;
  border-radius:50% 50%;
  margin 20px auto;
  img {
    width:100%;
    height:auto;
  }
}

.mainbox{
  flex-direction: column;
  padding:0 20px 25px 25px;
  .emailinput{
  }
  .emailverify {
  }
  .textmain-hideAlert {
    margin: 2px 0 16px 0;
  }
  .textmain-showAlert {
    margin: 2px 0 0 0;
  }
  select {
    background-color: rgba(246, 246, 246, 1);
    outline-style: none;
    border: none;
    padding: 8px 0;
    width: 300px;
    font-size: 15px;
    text-indent: 15px;
  }
  .radio{
    width 130px;
    background-color: rgba(246, 246, 246, 1);
    padding 8px;
    align-items center;
  }
  .submitinput {
    margin-top 40px;
    padding: 8px 0;
    letter-spacing: 5px;
    border: none;
    border-radius: 2px;
    color: rgba(255,255,255,1);
    background-color: rgba(0, 179, 138, 1);
  }
}
</style>
