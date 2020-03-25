<template>
    <!--prettier-ignore-->
    <div>
        <!--绑定一个class-->
        <div :class="classA">绑定class</div>
        <!--通过数组的方式绑定多个class-->
        <div :class="[classA,classB]">通过数组的方式绑定多个class</div>
        <!--通过对象的方式来绑定class-->
        <div :class="classObj">通过对象绑定class</div>
        <div :class="{current: false,current1: true}">通过对象绑定class</div>
        <div :class="{current: isCurrent,current1: isCurrent1}">通过对象绑定class</div>


        <!--绑定style-->
        <div :style="{color:'red',fontSize:'50px'}">绑定style</div>
        <div :style="{color:color,fontSize:ft}">绑定style</div>
        <div :style="styleObj">绑定style</div>
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            classA: "current",
            classB: "current1",
            classObj: {
                current: true,
                current1: false
            },
            isCurrent: true,
            isCurrent1: false,
            color: "blue",
            ft: "70px",
            styleObj: {
                color: "gray",
                fontSize: "100px"
            }
        };
    }
};
</script>

<style lang="less"></style>
