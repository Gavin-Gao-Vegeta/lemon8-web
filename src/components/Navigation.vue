<template>
  <div class="header">
    <div @click="handleGoHome">
      <img class="logo" src="@/assets/lemon-8.png" alt="" />
      <img class="beta" src="@/assets/beta.png" alt="" />
    </div>
    <div class="header-right">
      <div class="icon-box" @click="showTips = true">
        <img class="small-icon" src="@/assets/flash.png" alt="" />
        <span>{{ t("lemonaidea_limited_free") }}</span>
      </div>
      <div class="icon-box" @click="handleGoToIns">
        <img class="small-icon" src="@/assets/twitter.png" alt="" />
        <span>Instagram</span>
      </div>
      <div class="icon-box" @click="showFeedBack = true">
        <img class="small-icon" src="@/assets/mail.png" alt="" />
        <span>{{ t("lemonaidea_feedback") }}</span>
      </div>
      <li class="hidden !block">
        <Dropdown />
      </li>
    </div>
  </div>
  <el-dialog
    v-model="showFeedBack"
    :title="t('lemonaidea_feedback')"
    width="30%"
    style="height: 300px"
    center
  >
    <el-input
      v-model="feedback"
      :autosize="{ minRows: 4, maxRows: 4 }"
      :resize="'none'"
      type="textarea"
    />
    <template #footer>
      <span class="dialog-footer">
        <!-- <el-button @click="showFeedBack = false">Cancel</el-button> -->
        <el-button class="fb-but" type="primary" @click="handleSendFB">
          {{ t("lemonaidea_feedback_confirm") }}
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog
    v-model="showTips"
    class="tips-dialog"
    :title="t('lemonaidea_limited_free_title')"
    width="30%"
    style="height: 240px"
    center
  >
    <p>{{ t("lemonaidea_limited_free_desc") }}</p>
    <template #footer>
      <span class="dialog-footer">
        <!-- <el-button @click="showFeedBack = false">Cancel</el-button> -->
        <el-button class="fb-but" type="primary" @click="showTips = false">
          {{ t("lemonaidea_limited_free_btn") }}
        </el-button>
      </span>
    </template>
  </el-dialog>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { sendFB } from "@/api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const { t } = useI18n();
const showFeedBack = ref(false);
const showTips = ref(false);
const feedback = ref("");
const handleSendFB = () => {
  sendFB({ feedback: feedback.value })
    .then((res) => {
      if (res.errCode === 0) {
        ElMessage({
          message: "ok",
          type: "success",
        });
      }
    })
    .finally(() => {});
  showFeedBack.value = false;
};
const handleGoToIns = () => {
  window.open("https://www.instagram.com/lemonaidea");
};
const handleGoHome = ()=>{
  router.push('/')
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 8px;
  width: 100%;
  height: 64px;
  border-radius: 44px;
  border: 1px;
  background-color: #fff;
  padding: 0 12px;
  position: fixed;
  top: 0;
  .logo {
    width: 156px;
    height: 40px;
    position: relative;
    margin-left: 24px;
  }
  .beta {
    position: absolute;
    width: 48px;
    height: 20px;
    top: 10px;
    left: 184px;
    padding: 2px 7px 2px 7px;
    border-radius: 4px;
  }
  .header-right,
  .icon-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    img {
      width: 32px;
      height: 32px;
    }
    span {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .icon-box {
    margin-right: 24px;
  }
}
.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fb-but {
  display: flex;
  width: 258px;
  height: 48px;
  padding: 10px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #1e232d;
  border: none;
}
.tips-dialog {
  width: 590px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
  p {
    color: #1d2331;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
<style lang="scss">
.el-dialog--center {
  width: 590px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
}
</style>
