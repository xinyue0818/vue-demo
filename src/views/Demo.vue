<template>
    <div class="student">
         <div id="demo" class="demo">
        <h1>学生列表</h1>
        <p>修改的地方有main.js、router.js、App、 views/Demo.vue。</p>
        <p>过程：用UI库引入一个别人写好的按钮，触发事件，请求接口，获取数据，渲染数据到子组件</p>
        <div>
            <label for="name">姓名</label>
            <input type="text" id="name" placeholder="请输入学生姓名" v-model="newPerson.name">
        </div>
        <div>
            <label for="age">年龄</label>
            <input type="text" id="age" placeholder="请输入学生年龄">
        </div>
        <div>
            <label for="gender">性别</label>
            <select type="text" id="gender" v-model="newPerson.gender" value="未选择">
                <option value="未选择" selected>未选择</option>
                <option value="女">女</option>
                <option value="男">男</option>
            </select>
        </div>
        <div>
            <span for="phone">手机</span>
            <input type="text" id="phone" placeholder="请输入学生手机号码">
        </div>
        <div>
            <button @click="createNewPerson">创建学生信息</button>
        </div>

        <!--<el-button v-on:click="handleClick" type="primary">点击向后端发起请求</el-button>-->
        <!--<h5>接口返回结果：{{respText}}</h5>-->
    </div>
        <table class="student-list" border>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>手机</th>
                    <th>删除</th>
                    <th>修改</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p, index) in persons">
                    <td>{{p.name}}</td>
                    <td>{{p.gender}}</td>
                    <td>{{p.age}}</td>
                    <td>{{p.phone}}</td>
                    <td>
                        <button @click="delPerson(index)">删除</button>
                    </td>
                    <td>
                        <button @click="showOverlay(index)">修改</button>
                    </td>
                </tr>
                 <!--<div>-->
                    <!--<el-switch v-model="value"></el-switch>-->
                    <!--<el-pagination :hide-on-single-page="value" :total="5"-->
                        <!--layout="prev, page, next"></el-pagination>-->
                    <!--</div>-->
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        name: "Demo",
        data: function(){
            return {
                // respText: '',
                persons: [

                    {name:"西门吹雪", age:"4", gender:"男", phone:"15078950533"},
                    {name:"常德帥", age:"6", gender:"男", phone:"15878950533"},
                    {name:"尤幼倩", age:"7", gender:"男", phone:"15078950533"},
                    {name:"董得多", age:"5", gender:"男", phone:"15078950533"},
                ],
                newPerson: {
                    name: '',
                    age: '',
                    gender: '',
                    phone: ''
                }
            }
        },
        methods: {
            handleClick: function(){
                console.log(11111);
                let _this = this;
                this.axios.get('/api/index', {
                    params: {
                        // kw: 'ip'
                    }
                }).then(function(resp){
                    console.log(resp);
                    console.log(resp.data, typeof resp);
                    console.log(resp.data.msg);
                    console.log(_this);
                    this.respText = resp.data.msg;
                })
            },
            createNewPerson: function(){
                if (this.newPerson.name === ''){
                    alert('姓名不能为空');
                    return;
                }
                if(this.newPerson.age <= 0){
                    alert('请输入正确的年龄');
                    return;
                }
                if(this.newPerson.phone === ''){
                    alert('请输入正确的手机号码');
                    return;
                }
                this.persons.push(this.newPerson);
                this.newPerson = {
                    name: '',
                    age: 11,
                    gender: 'male',
                    phone: '13834017427',
                }
            },

            delPerson: function(index){
                this.persons.splice(index, 1)
            },
            showOverlay: function(index){
                this.persons = index;
                this.persons.isActive = true;
            }
            // createNewPerson(){
            //     // 8 验证输入框姓名，实现不能为空创建
            //     if(this.newPerson.name === ''){
            //         alert('学生姓名不能为空哦');
            //         return;  //一旦姓名为空，不再执行创建用户的操作
            //     }
            //
            //     // 8.1 验证输入框年龄不能小于0，实现不能为空创建

            //
            //     // 8.1 验证输入框手机号码不能为空，实现不能为空创建
            //     if(this.newPerson.phone === ''){  //应该通过正则验证手机号码的格式，这里只是验证不能为空
            //         alert('请输入正确的手机号码');
            //             return;
            //     }
            //
            //  //4.2拿到前面的数组，把新建的对象放进去，
            //     // 4.2并且产生的时候应该是排列在数组的最前面,使用数组的.persons.unshift()方法实现这个功能
            //     // 4.2往数组中创建一条新内容
            //     this.persons.unshift(this.newPerson);//4.2此时不管输入框是否存在有效值，点击button按钮都会不停是创建新用户
            //                                             //4.2所以要设置如果没有值的时候不能继续插入新的值
            //
            //     //7.1清空数据，实现创建新用户之后把输入框的内容清空，但是此时依然可以创建空的数据
            //     this.newPerson = {name:'', age:12, sex:'', phone:''}
            // },
            //
            // //9.点击删除按钮的时候删除一条学生信息记录
            // //实现原理：获取到数组，从数组中删除，
            // //想要从数组中删除一条数据需要一条索引
            // delPerson(index){
            //     this.persons.splice(index,1);
            // }


    }
    }
</script>

<style scoped>
    .demo{
        background: yellow;
    }
    .student-list{
        margin-left: 800px;
        background: red;
    }
</style>
