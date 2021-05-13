<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <!-- <img src="" /> -->
        点击按钮
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  // name: 'BottomRightTable1',
  data () {
    return {
      config: {
        data: [
          ['1 号', '点击此处'],
          ['2 号', '点击此处'],
          ['3 号', '点击此处'],
          ['4 号', '点击此处'],
          ['5 号', '点击此处'],
          ['6 号', '点击此处'],
          ['7 号', '点击此处'],
          ['8 号', '点击此处'],
          ['9 号', '点击此处'],
          ['10 号', '点击此处'],
          ['11 号', '点击此处']
        ],
        index: true,
        rowNum:11,
        columnWidth: [30, 70],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"18% + 10px");
  height: 786px;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }
  .row-item{
    height: 80px;
  }

  .table-name {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    // margin-bottom: 15px;
    font-size: 24px;
    margin-top: 10px;
    color: honeydew;
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
