<template>
    <div class="lmInput-wrap">
        <span @click="handlerReturn" class="returnBtn">返回</span>
        <h1>输入框</h1>
        <span>数字输入框（默认最大长度10）</span>
        <lm-input
        v-model="value"
        inputType="int"></lm-input>
        <p>{{value}}</p>
        <span style="marginTop:30px">中文输入框（最大长度6）</span>
        <lm-input
        v-model="chinessVal"
        inputType="chiness"
        :maxlength="6"></lm-input>
        <p>{{chinessVal}}</p>
        <span style="marginTop:30px">小数输入框（格式xxx.xxx）</span>
        <lm-input
        v-model="floatVal"
        inputType="float"
        :fillInDecimal="true"
        :integer="5"
        :decimal="3"></lm-input>
        <p>{{floatVal}}</p>
    </div>
</template>
<script>
import lmInput from "../elComponents/lmInput"
export default {
    data(){
        return {
            value:150,
            chinessVal:'只能输中文',
            floatVal:159.00
        }
    },
    components:{
        lmInput
    }
}
</script>

