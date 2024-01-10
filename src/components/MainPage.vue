<script setup lang="ts">
import { useRouter } from "vue-router";
defineProps<{ msg: string }>();
const visits = useVisits();
const router = useRouter();
const langs = ["English", "ภาษาไทย", "日本語", "繁體中文"];
const { locale, t, availableLocales } = useI18n();
const handleJumpToFunc = (index: string) => {
  let locals: any = "";
  if (locale.value === langs[0]) {
    locals = "en";
  } else if (locale.value === langs[1]) {
    locals = "th";
  } else if (locale.value === langs[2]) {
    locals = "ja";
  } else if (locale.value === langs[3]) {
    locals = "zh-hk";
  }
  switch (index) {
    case "0":
      router.push(`/${locals}/title_paraphrasing`);
      break;
    case "1":
      router.push(`/${locals}/bodyText_paraphrasing`);
      break;
    case "2":
      router.push(`/${locals}/title_optimization`);
      break;
    case "3":
      router.push(`/${locals}/bodyText_optimization`);
      break;
  }
};
</script>

<template>
  <div class="mt-10 flex flex-col items-center space-y-7 main-page">
    <div class="title">
      <p class="title-p">Become Lemon8 Pro Now</p>
    </div>
    <div class="outer-box">
      <div class="options-box dark-yellow">
        <div class="item">
          <p class="title">{{ t("lemonaidea_title_imitation") }}</p>
          <el-divider />
          <div class="under">
            <span>{{ t("lemonaidea_desc_title_imitation") }}</span
            ><button @click="handleJumpToFunc('0')">
              Start Creating <img src="@/assets/arrow.png" />
            </button>
          </div>
        </div>
      </div>
      <div class="options-box yellow">
        <div class="item">
          <p class="title">{{ t("lemonaidea_text_imitation") }}</p>
          <el-divider />
          <div class="under">
            <span>{{ t("lemonaidea_desc_text_imitation") }}</span
            ><button @click="handleJumpToFunc('1')">
              Start Creating <img src="@/assets/arrow.png" />
            </button>
          </div>
        </div>
      </div>
      <div class="options-box purple">
        <div class="item">
          <p class="title purple-title">{{ t("lemonaidea_title_improve") }}</p>
          <el-divider class="purple-line" />
          <div class="under">
            <span class="purple-span">{{ t("lemonaidea_desc_title_improve") }}</span
            ><button @click="handleJumpToFunc('2')" class="purple-button">
              Start Creating <img src="@/assets/arrow-purple.png" />
            </button>
          </div>
        </div>
      </div>
      <div class="options-box green">
        <div class="item">
          <p class="title green-title">{{ t("lemonaidea_text_improve") }}</p>
          <el-divider class="green-line" />
          <div class="under">
            <span class="green-span">{{ t("lemonaidea_desc_text_improve") }}</span
            ><button @click="handleJumpToFunc('3')" class="green-button">
              Start Creating <img src="@/assets/arrow-green.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  .title {
    width: 100%;
    text-align: left;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    height: 64px;

    .title-p {
      font-family: Poppins;
      font-size: 68px;
      font-weight: 900;
      line-height: 74px;
      letter-spacing: 0em;
    }
  }
  .outer-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    .options-box {
      width: 324px;
      height: 399px;
      top: 242px;
      left: 48px;
      border-radius: 40px;
      padding: 25px 24px;
      .item {
        display: flex;
        flex-direction: column;
        height: 100%;
        .under {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        button {
          background: none;
          border: 1px #2d2620 solid;
          width: 272px;
          height: 62px;
          border-radius: 16px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          img {
            width: 16.711px;
            height: 17.934px;
            margin-left: 10px;
          }
        }
        .purple-title,
        .purple-span,
        .purple-button {
          color: #e2c3e7;
        }
        .green-title,
        .green-span,
        .green-button {
          color: #d8e55b;
        }
        .purple-button,
        .purple-line {
          border-color: #e2c3e7;
          img {
            width: 16.711px;
            height: 17.934px;
            flex-shrink: 0;
          }
        }
        .green-button,
        .green-line {
          border-color: #d8e55b;
          img {
            width: 16.711px;
            height: 17.934px;
            flex-shrink: 0;
          }
        }
      }
    }
    .dark-yellow {
      background-color: #cea64d;
    }
    .yellow {
      background-color: #d6e852;
    }
    .purple {
      background-color: #4b2572;
    }
    .green {
      background-color: #304e20;
    }
  }
}
.read-the-docs {
  color: #888;
  font-size: 1.2rem;
  animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.el-divider {
  border-color: #2d2620;
}
</style>
