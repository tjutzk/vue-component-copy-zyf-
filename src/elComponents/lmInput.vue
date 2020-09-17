// 基于el-input进行二次封装  主要解决输入框校验问题
<template>
    <el-input
    :disabled="disabled"
    v-model="value"
    :maxlength="inputMaxlength"
    :placeholder="placeholder"
    @input="_inputValChange"
    @blur="_inputValBlur">
    </el-input>
</template>
<script>
const EVENTS = {
    INPUT:'input'
}
export default {
    name:'lmInput',
    model:{
        prop:'inputVal',
        event: EVENTS.INPUT
    },
    props:{
        // 绑定value
        inputVal:{
            type:String | Number,
            default:''
        },
        // 是否禁用
        disabled:{
            type:Boolean,
            default:false
        },
        // 提示
        placeholder:{
            type:String,
            default:'请输入内容'
        },
        // 输入框类型  int-整数； float-小数；chiness-中文； 
        inputType:{
            type:String,
            default:''
        },
        // 最大长度
        maxlength:{
            type:Number,
            default:10
        },
        // 整数位
        integer:{
            type:Number,
            default:8
        },
        // 小数位
        decimal:{
            type:Number,
            default:2
        },
        // 是否自动格式化两位小数，补零
        fillInDecimal:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            value:this.inputVal,
            inputMaxlength:this.maxlength
        }
    },
    created(){
        if(this.inputType === 'float'){
            this.inputMaxlength = this.integer + this.decimal + 1
        }
    },
    mounted(){
        this._inputValChange()
    },
    methods:{
        // 输入框值改变，检验输入值
        _inputValChange(){
            if(!this.inputType){
                this.$emit(EVENTS.INPUT, this.value)
                return
            }
            switch (this.inputType) {
                case 'int':
                    this.value = this._getIntVal()
                    break;
                case 'float':
                    this.value = this._getFloatVal()
                    break;
                case 'chiness':
                    this.value = this._getChinessVal()
                    break;
                default:
                    throw new Error('type of inputType is illegal!')
                    break;
            }
            this.$emit(EVENTS.INPUT, this.value)
        },
        _getIntVal(){
            var intReg = /[^0-9]/g
            return String(this.value).replace(intReg, '')
        },
        _getFloatVal(){
            var floatReg = new RegExp(`(\\d{0,${this.integer}})(\\d*)(\\.?)(\\d{0,${this.decimal}})(\\d*)`, 'g')
            let matchArr = String(this.value).match(/\d+\.?\d*/);
            if (!matchArr) {
                return ''
            }else{
                return matchArr[0].replace(floatReg,"$1$3$4");
            }
        },
        _getChinessVal(){
            var chinessReg = /[^\u4e00-\u9fa5]/g
            return String(this.value).replace(chinessReg, '')
        },
        _inputValBlur(){
            if(!this.value){
                return
            }
            if(this.inputType === 'float' && this.fillInDecimal){
                this.value = (+this.value).toFixed(+this.decimal)
                this.$emit(EVENTS.INPUT, this.value)
            }
        }
    },
    
    watch:{
        inputVal:function (newVal, oldVal) {
            this.value = newVal
        }
    }
}
</script>
<style scoped>

</style>

