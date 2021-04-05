<template>
<div class="flex flex_space-between">
    <div class="radio flex flex_space-between" v-for="(item, index) in options" :key="index" @click="selecter(typeof item == 'string' ? item : item.value)">
      <label >{{typeof item == 'string' ? item : item.label}}</label>
      <input type="radio" :value="typeof item == 'string' ? item : item.value" v-model="selectedValue"
             :disabled="typeof item == 'string' ? false : item.disabled == true ? true :false">
    </div>
</div>
</template>

<script>
export default {
  name: 'inputRadio',
  props: {
    options: {
      type: [String, Array],
      request: true,
    },
  },
  data() {
    return {
      selectedValue: null,
    };
  },
  methods: {
    selecter(item) {
      this.selectedValue = item;
      this.$emit('input', this.selectedValue);
    },
  },
};
</script>

<style scoped lang="stylus">
.radiomain {
  margin: 8px 0;
}
.radio{
  width 130px;
  background-color: rgba(246, 246, 246, 1);
  padding 8px;
  align-items center;
}
</style>
