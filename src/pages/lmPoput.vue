<template>
    <div class="lmInput-wrap">
        <div @click="handlerReturn" class="returnBtn">返回</div>
        <button type="button" class="popupBtn" @click="handlePopupShow">中间</button>
        <button type="button" class="popupBtn" @click="handlePopup2Show">顶部</button>
        <button type="button" class="popupBtn" @click="handlePopup3Show">低部</button>
        <button type="button" class="popupBtn" @click="handlePopup4Show">左边</button>
        <button type="button" class="popupBtn" @click="handlePopup5Show">右边</button>
        <lm-poput ref="popup1">
            <div>
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
            </div>
        </lm-poput>
        <lm-poput ref="popup2" position="top">
            <div>
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
            </div>
        </lm-poput>
        <lm-poput ref="popup3" position="bottom">
            <div>
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
            </div>
        </lm-poput>
        <lm-poput ref="popup4" position="left">
            <div>
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
            </div>
        </lm-poput>
        <lm-poput ref="popup5" position="right">
            <div>
                对酒当歌，人生几何！譬如朝露，去日苦多。慨当以慷，忧思难忘。何以解忧？唯有杜康。
                青青子衿，悠悠我心。但为君故，沉吟至今。呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
                明明如月，何时可掇？忧从中来，不可断绝。越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
                月明星稀，乌鹊南飞。绕树三匝，何枝可依？山不厌高，海不厌深。周公吐哺，天下归心。
            </div>
        </lm-poput>
    </div>
</template>
<script>
import lmPoput from "../components/Popup"
export default {
    data(){
        return {
        }
    },
    methods:{
        handlePopupShow(){
            this.$refs.popup1.show()
        },
        handlePopup2Show(){
            this.$refs.popup2.show()
        },
        handlePopup3Show(){
            this.$refs.popup3.show()
        },
        handlePopup4Show(){
            this.$refs.popup4.show()
        },
        handlePopup5Show(){
            this.$refs.popup5.show()
        }
    },
    components:{
        lmPoput
    }
}
</script>
<style scoped>
    .popupBtn{
        width: 150px;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        display: block;
        margin: 20px auto;
        background-color:#ffffff;
        border-radius: 6px;
        cursor: pointer;
        font-size: 20px;
    }
</style>


