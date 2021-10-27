<template>
  <el-table
      :data="tableData"
    style="width: 100%">
    <el-table-column
      label="标题"
      prop="title">
    </el-table-column>
    <el-table-column
      label="课程名"
      prop="coursename">
    </el-table-column>
    <el-table-column
      label="issue"
      prop="brief">
    </el-table-column>
    <el-table-column
      label="回答"
      prop="answer">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          type="info"
          size="mini"
          @click="handleShow(scope.$index, scope.row)">查看
        </el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'question',
  data() {
    return {
      tableData: [{
        title: 'title',
        coursename: 'coursename',
        brief: 'brief',
        answer: 'answer',
      }],
    };
  },
};
</script>

<style scoped>

</style>
