<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="标题"
      prop="title">
    </el-table-column>
    <el-table-column
      label="班级"
      prop="classname">
    </el-table-column>
    <el-table-column
      label="时间"
      prop="time">
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
  name: 'homework',
  data() {
    return {
      tableData: [
        {
          classname: '19001',
          title: 'wang',
          time: '2021.01.21',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
