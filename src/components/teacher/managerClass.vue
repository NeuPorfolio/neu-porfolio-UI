<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="班级"
      prop="class">
    </el-table-column>
    <el-table-column
      label="专业"
      prop="subject">
    </el-table-column>
    <el-table-column
      label="教室"
      prop="address">
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
          @click="handleShow(scope.$index, scope.row)">查看</el-button>
        <el-button
        type="primary"
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'managerClass',
  data() {
    return {
      tableData: [{
        class: '19001',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }, {
        class: '19002',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }, {
        class: '19003',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }, {
        class: '19004',
        subject: '计算机科学与技术',
        address: 'A7-207',
      }],
      search: '',
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleShow(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>

</style>
