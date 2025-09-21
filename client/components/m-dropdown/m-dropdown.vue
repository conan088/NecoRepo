<template>
  <div class="m-dropdown">
    <div class="m-dropdown-acbox" @click.stop="showList = !showList">
      <span class="m-dropdown-acbox-code">{{ areaCode.dail_code }}</span>
      <image
        :class="
          showList
            ? 'm-dropdown-acbox-arrow m-dropdown-acbox-acarrow'
            : 'm-dropdown-acbox-arrow'
        "
        src="@/static/index/arrow-up-2.svg"
        mode="widthFix"
      />
    </div>
    <div
      :class="
        showList ? 'm-dropdown-list m-dropdown-list-show ' : 'm-dropdown-list'
      "
    >
      <div class="m-dropdown-list-con">
        <div class="m-dropdown-list-box">
          <div
            :class="
              areaCode.id === item.id
                ? 'm-dropdown-list-item m-dropdown-list-item-active'
                : 'm-dropdown-list-item'
            "
            v-for="item in globalAreaCode"
            :key="item.id"
            @click="setNative(item)"
          >
            <span class="m-dropdown-list-item-code">{{ item.dail_code }}</span>
            <span class="m-dropdown-list-item-shu">|</span>
            <span class="m-dropdown-list-item-native">{{
              item.translations["cn"]
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import globalAreaCode from "@/utils/globalAreaCode.json";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      globalAreaCode: globalAreaCode,
      showList: false,
    };
  },
  computed: {
    ...mapState(["areaCode"]),
  },
  mounted() {
    window.addEventListener("click", () => {
      this.showList = false;
    });
  },
  beforeDestroy() {
    window.removeEventListener("click", () => {});
  },
  methods: {
    ...mapMutations(["setAreaCode"]),
    setNative(item) {
      this.showList = false;
      this.setAreaCode(item);
    },
  },
};
</script>

<style lang="less" scoped>
.m-dropdown {
  .m-dropdown-acbox {
    display: flex;
    align-items: center;
    .m-dropdown-acbox-arrow {
      width: 16rpx;
      margin-left: 4px;
      transition: all 0.3s;
    }
    .m-dropdown-acbox-acarrow {
      transform: rotate(-90deg);
    }
  }
  .m-dropdown-list {
    position: absolute;
    top: 100rpx;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    z-index: 200;
    border-radius: 6px;
    background: #f2f2f2;
    box-sizing: border-box;
    transition: all 0.3s;
    .m-dropdown-list-con {
      padding: 32rpx;
      overflow: hidden;
      .m-dropdown-list-box {
        height: 500rpx;
        overflow-y: scroll;
        .m-dropdown-list-item {
          display: flex;
          align-items: center;
          height: 40rpx;
          margin-bottom: 40rpx;
          color: rgba(0, 0, 0, 0.5);
          font-size: 28rpx;
          .m-dropdown-list-item-code {
            width: 108rpx;
          }
          .m-dropdown-list-item-shu {
            color: #d9d9d9;
          }
          .m-dropdown-list-item-native {
            flex: 1;
            padding-left: 32rpx;
          }
        }
        .m-dropdown-list-item-active {
          .m-dropdown-list-item-code {
            color: #07C160;
          }
          .m-dropdown-list-item-native {
            color: #07C160;
          }
        }
      }
    }
  }
  .m-dropdown-list-show {
    height: 562rpx;
  }
}
</style>
