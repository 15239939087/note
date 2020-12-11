<template>
  <div>
    <!--列表显示项-->
    <el-card shadow="never">
      <span> {{ transferConfig.title[0] }}</span>
      <draggable
        class="drag-area list-group"
        v-model="showColunmList"
        v-bind="dragOptions"
        @change="e => dragChange(e, 'show')"
        group="columnList"
      >
        <el-tag
          v-for="element in showColunmList"
          :key="element.name"
          effect="plain"
        >
          {{ element.label }}
        </el-tag>
      </draggable>
    </el-card>
    <!--列表隐藏项-->
    <el-card shadow="never" style="margin-top: 10px">
      <span> {{ transferConfig.title[1] }}</span>
      <draggable
        class="drag-area list-group"
        v-model="showColunmList"
        v-bind="dragOptions"
        @change="e => dragChange(e, 'hidden')"
        group="columnList"
      >
        <el-tag
          v-for="element in hiddenColunmList"
          :key="element.name"
          effect="plain"
        >
          {{ element.label }}
        </el-tag>
      </draggable>
    </el-card>
    <p class="draggable-tip">
      {{ transferConfig.tip }}
    </p>
    <div class="draggable-footer">
      <el-button type="primary" @click="confirmDrag" style="">
        确认
      </el-button>
      <el-button plain @click="confirmDrag('cancel')">取消</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "CommonTableTransfer",
  components: {
    draggable
  },
  props: {
    // 列配置数组
    value: {
      type: Array,
      default: () => []
    },
    // 配置参数
    transferConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dragColums: {}, // 拖拽模式下，最终确认的列配置对象
      showColunmList: [], // 拖拽切换列的模式下，显示列的数据
      hiddenColunmList: [], // 拖拽切换列的模式下，隐藏列的数据
      // 拖拽组件需要的参数
      dragOptions: {
        animation: 50,
        disabled: false,
        emptyInsertThreshold: 10
      }
    };
  },
  computed: {},
  mounted() {
    this.setColumns();
  },
  methods: {
    // 点击确认取消按钮
    confirmDrag(type) {
      if (type === "cancel") {
        this.$emit("cancel");
      } else {
        console.log(this.dragColums);
        this.$emit("confirm");
      }
    },
    //列表列配置变化(来自父组件)的时候，改变drag模式下的列数据
    setColumns() {
      this.dragColums = {};
      this.value.forEach(item => {
        this.dragColums[item.name] = { ...item };
      });
      // 显示与隐藏列数组
      this.showColunmList = this.getColumnList(false);
      this.hiddenColunmList = this.getColumnList(true);
    },
    // 拖拽模式下，获取列表显示项与列表隐藏项
    getColumnList(isHidden) {
      return this.value.filter(
        item => item.hidden === isHidden && this.isValidColumn(item)
      );
    },
    // 判断列是不是有效的列 统一设置标准，能参与显示/隐藏操作的列
    isValidColumn(obj) {
      return !!(obj.label || obj.props);
    },
    // 拖动 tag 触发
    dragChange() {
      console.log(123);
      this.showColunmList.forEach(item => {
        this.dragColums[item.name] = { ...item, hidden: false };
      });
      this.hiddenColunmList.forEach(item => {
        this.dragColums[item.name] = { ...item, hidden: true };
      });
      console.log(this.dragColums);
      console.log(this.hiddenColunmList);
    }
  }
};
</script>

<style scoped lang="scss">
.drag-area {
  width: 600px;
  max-height: 150px;
  overflow: auto;
  .el-tag {
    margin: 5px 5px 5px 0px;
    cursor: pointer;
    border-radius: 0;
  }
}
.draggable-footer {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;
}
.draggable-footer /deep/ .el-button {
  margin-left: 20px;
  border-radius: 0;
}
.draggable-tip {
  font-size: 12px;
  color: #cccccc;
}
</style>
