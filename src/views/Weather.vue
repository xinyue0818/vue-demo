<template>
    <div id="weather" class="weather">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <el-row>
                    <el-col :span="24" class="list">
                        <h5>未来的几天的天气</h5>
                        <el-table
                                :data="tableData"
                                style="width: 100%"
                                border="1px solid red"
                        >
                            <el-table-column
                            pro="data"
                            label="日期">
                            </el-table-column>
                            <el-table-column
                            prop="high"
                            label="高温"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="low"
                            label="低温">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :soan="24" class="temperature"></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Weather",
        data: function(){
            return{
                tableData: [
                    {
                        "data": "24",
                        "sunrise": "05:28",
                        "hight": "高温 38.0℃",
                        "low": "低温 28.0℃",
                        "sunset": "19:35",
                        "api": 87,
                        "ymd": "2019-07-24",
                        "week": "星期三",
                        "fx": "西北风",
                        "fl": "3-4级"
                    }
                ],

            }
        },
        methods: {
            handlerClick: function(){
                console.log(11111);
                this.axios.get('/api/index', {

                }).then(function(resp){
                    console.log(resp);
                    this.respData = resp.Data.msg;
                })
            }
        }
    }
</script>

<style scoped>

</style>