<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="班级"
      prop="class">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="题号"
      prop="number">
    </el-table-column>
    <el-table-column
      label="问题"
      prop="content">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          type="info"
          size="mini"
          @click="handleShow(scope.$index, scope.row)">查看详情</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handleAnswer(scope.$index, scope.row)">解答</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'issue',
  data() {
    return {
      tableData: [{
        class: '19001',
        name: '王富贵',
        content: '老师为什么这道题要这么翻译呢？',
        number: '255',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }, {
        class: '19002',
        name: '白月初',
        content: '老师可以给我看看这道题么？',
        number: '255',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }, {
        class: '19003',
        name: '涂山红',
        content: '老师为什么这段代码无法运行呢？',
        number: '255',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }, {
        class: '19004',
        name: '涂山容',
        content: '请问老师作文有什么提高的办法么？',
        number: '255',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }],
      search: '',
    };
  },
  methods: {
    handleShow(index, row) {
      console.log(index, row);
    },
    handleAnswer(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>

</style>
