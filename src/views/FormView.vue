<script setup>
// xs (<768px) → sm (≥768px) → md (≥992px) → lg (≥1200px) → xl (≥1920px)
// <el-row>
//     <el-col
//       :span="12"     <!-- 基礎寬度：佔一半 -->
//       :xs="24"       <!-- 手機：佔滿 -->
//       :sm="24"       <!-- 平板：佔滿 -->
//       :md="12"       <!-- 一般電腦：佔一半 -->
//       :lg="8"        <!-- 大螢幕：佔三分之一 -->
//       :xl="6"        <!-- 超大螢幕：佔四分之一 -->
//     >
//       內容
//     </el-col>
//   </el-row>

// /* 基礎樣式 (適用所有尺寸) */
// .col {
//   width: 100%;  /* 預設手機版面 */
// }
// /* sm: ≥768px */
// @media (min-width: 768px) {
//   .col {
//     width: 50%;
//   }
// }
// /* md: ≥992px */
// @media (min-width: 992px) {
//   .col {
//     width: 33.33%;
//   }
// }

// <el-col
//   :span="24"     <!-- 基礎樣式: 全寬 -->
//   :sm="12"       <!-- ≥768px: 半寬 -->
//   :md="8"        <!-- ≥992px: 三分之一寬 -->
// >

const formValue = ref({
  name: "",
  selectValue: "",
});
const options = ref([
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]);
const onSubmit = () => {
  console.log(formValue.value);
};
</script>

<template>
  <div class="formWrap">
    <el-form class="formView" label-width="auto">
      <el-row :gutter="30">
        <el-col :md="12" :lg="8">
          <el-form-item label="Qqq Cccc">
            <InputBase v-model="formValue.name"></InputBase>
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8">
          <el-form-item label="Name">
            <InputBase v-model="formValue.name"></InputBase>
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8">
          <el-form-item label="Name">
            <InputBase v-model="formValue.name"></InputBase>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="24" :md="12" :lg="8">
          <el-form-item label="Name">
            <InputBase v-model="formValue.name"></InputBase>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <el-form-item label="NameAAB">
            <InputBase v-model="formValue.name"></InputBase>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :sm="24" :md="12" :lg="8">
          <el-form-item label="Name1111">
            <el-date-picker
              v-model="formValue.name"
              type="date"
              placeholder="Pick a date"
              :default-value="new Date()"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <el-form-item label="Name">
            <SelectBase class="mute" v-model="formValue.selectValue">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option
            ></SelectBase>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <el-form-item label="AB/CD">
            <el-row>
              <el-col :span="12">
                <SelectBase class="mute" v-model="formValue.selectValue">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option
                ></SelectBase>
              </el-col>
              <el-col :span="12">
                <InputBase v-model="formValue.name" type="number"></InputBase>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
.formWrap {
  padding: 20px;
}
// form 直接傳入 class
.formView {
  &.el-form {
    box-shadow: 0 1px 10px lightgray;
    padding: 20px;
  }
  .el-form {
    &-item__label {
      margin: {
        top: auto;
        bottom: auto;
      }
    }
  }
  > .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 130px;
    }
  }
}
</style>
