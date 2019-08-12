<template>
  <div class="box">
    <h1>便签</h1>
    <div>
      <label>日期</label>
      <input type="text" value="请输入日期">
    </div>
    <div>
      <label>标题</label>
      <input type="text" placeholder="请输入标题">
    </div>
    <div>
      <label>内容</label>
      <input type="text" placeholder="请输入内容">
    </div>
    <!--<table>-->
      <!--<th>-->
        <!--<tr>-->
          <!--<th>日期</th>-->
          <!--<th>标题</th>-->
          <!--<th>内容</th>-->
        <!--</tr>-->
      <!--</th>-->
      <!--<td>-->
        <!--<tr>-->
          <!--<td></td>-->
          <!--<td></td>-->
          <!--<td></td>-->
        <!--</tr>-->
      <!--</td>-->
    <!--</table>-->
    <div>
      <el-card>我的第一个页面</el-card>
    </div>
  </div>
</template>
<script>
  export default{
    name: "About",
    components: {},
    data: function(){
      return{}
    },
    methods: {}
  }
</script>
<style>

</style>