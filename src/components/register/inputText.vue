<template>
<div :class="isShowAlert?'textmain-showAlert':'textmain-hideAlert'">
  <input class="textinput" v-bind="$attrs" @input="$emit('input',$event.target.value)" @blur="$emit('blur')">
  <p class="textverify" v-if="isShowAlert">{{alertMessage}}</p>
</div>
</template>

<script>
export default {
  name: 'inputText',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      alertMessage: null,
      isShowAlert: false,
    };
  },
  methods: {
    showAlert(message) {
      this.alertMessage = message;
      this.isShowAlert = true;
    },
    hideAlert() {
      this.alertMessage = null;
      this.isShowAlert = false;
    },
  },
};
</script>

<style scoped lang="stylus">
.textmain-hideAlert {
  margin: 2px 0 16px 0;
}
.textmain-showAlert {
  margin: 2px 0 0 0;
}
.textinput {
  background-color: rgba(246, 246, 246, 1);
  outline-style: none;
  border: none;
  padding: 8px 0;
  width: 300px;
  font-size: 15px;
  text-indent: 15px;
}
.textverify {
  color red;
  transition .3s;
  font-size 14px;
}
</style>
