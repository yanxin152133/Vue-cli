<template>
    <!--prettier-ignore-->
    <div>
        <!--花括号{{}}}绑定数据-->
        <p>
            {{ message }}
        </p>
        <!--花括号{{}}可以写表达式-->
        <p>
            {{ message + ":" + type }}
        </p>
        <!--v-bind绑定属性-->
        <div v-bind:title="title" v-bind:msg="msg">这是一个div</div>
        <div :title="title" :msg="msg">这是一个div</div>
        <!--绑定动态属性-->
        <a :[attrName]="title"></a>
    </div>
</template>

<script>
export default {
    name: "v-bind",
    data() {
        return {
            message: "message",
            type: "type",
            title: "title",
            msg: "msg",
            attrName: "title"
        };
    },
    mounted() {
        setTimeout(() => {
            this.message = "sss";
            this.attrName = "msg";
        }, 3000);
    }
};
</script>

<style scoped></style>
