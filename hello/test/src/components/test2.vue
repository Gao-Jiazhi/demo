<template>
  <div>
    <el-button style="float: left;" @click="add">新增</el-button>
    <el-table :data="tableData" :key="itemkey" size="mini" fit="false" :header-cell-style="{background:'#4DFFFF',color:'#606266'}">
      <el-table-column :render-header="renderHeader" label="C508机组通道线的点检表,2819218" align="center">
        <el-table-column>
          <el-table-column label="序号" width="120" align="center">
            <template slot-scope="scope">
            {{scope.$index +1}}
            </template>
          </el-table-column>
          <el-table-column label="地方" width="120" align="center">
            <template slot-scope="scope">
            {{scope.row.adress}}
            </template>
          </el-table-column>
          <el-table-column label="检查情况" align="center">


            <el-table-column label="照片" width="180" align="center">
              <template slot-scope="scope">
              <el-upload :limit='1' action="#" list-type="picture-card" :on-change="fileChange" :class="{disabled:uploadDisabled}" :file-list="imagelist" :auto-upload="false" :ref="'pictureUpload'+scope.$index">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file,scope.$index)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
               </template>
              <el-button @click="takephoto">拍照</el-button>
            </el-table-column>
            <el-table-column label="上传时间" width='100' align="center">

            </el-table-column>

            <el-table-column label="记录" width="250" align="center" >
              <template slot-scope="scope">
              <el-select  @change="handleclick" v-model="scope.row.record" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </template>
            </el-table-column>

          </el-table-column>
          <el-table-column prop="chargePerson" label="责任方" width="120" align="center">
          </el-table-column>
          <el-table-column prop="checkperson" label="检查人" width="120" align="center">
            <template slot-scope="scope">
            <el-select  @change="handleclick" v-model="scope.row.checkPerson" clearable placeholder="请选择">
              <el-option
                v-for="item in checkPerson"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
              </el-option>
            </el-select>
            </template>
          </el-table-column>
          <el-table-column label="处理结果" width="180" align="center">
            <template slot-scope="scope">
            <el-upload action="#" list-type="picture-card" :auto-upload="false" :ref="'pictureUploa'+scope.$index">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                <span class="el-upload-list__item-actions">
                  <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                    <i class="el-icon-download"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove2(file,scope.$index)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            </template>
            <el-button @click="takephoto">拍照</el-button>
          </el-table-column>
          <el-table-column label="上传时间" width='100' align="center">

          </el-table-column>
          <el-table-column prop="defineperson" label="确认人" width="120" align="center">
            <template slot-scope="scope">
            <el-select  @change="handleclick" v-model="scope.row.confirmPerson" clearable placeholder="请选择">
              <el-option
                v-for="item in confirmPerson"
                :key="item.value2"
                :label="item.label"
                :value="item.value2">
              </el-option>
            </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="note" label="备注" width="120" align="center">
          </el-table-column>
        </el-table-column>



      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
   <el-dialog width="30%" title="新增" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="地址" >
          <el-input style="width: 100px;" v-model="form.adress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="照片">
          <el-button @click="takephoto">拍照</el-button>
        </el-form-item>
        <el-form-item label="记录">
          <el-select v-model="form.record" placeholder="选择记录">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责方">
          <el-input style="width: 100px;" v-model="form.chargePerson" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="检查人">
          <el-select v-model="form.checkPerson" placeholder="选择记录">
            <el-option label="朱炜" value="cp1"></el-option>
            <el-option label="毛飞俊" value="cp2"></el-option>
            <el-option label="潘宏清" value="cp3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理结果">
          <el-button @click="takephoto">拍照</el-button>
        </el-form-item>
        <el-form-item label="确认人">
          <el-select v-model="form.confirmPerson" placeholder="选择记录">
            <el-option label="潘宏清" value="cf1"></el-option>
            <el-option label="蔡卫华" value="cf2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="clickAddConfirm(form)">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
const options = [{
  value: 'r1',
  label: '气刀刀架锌渣'
}, {
  value: 'r2',
  label: '锌粉积聚'
}]
const checkPerson = [{
    value1: 'cp1',
    label: '朱炜'
  }, {
    value1: 'cp2',
    label: '毛飞俊'
  },{
    value1: 'cp3',
    label: '潘宏清'
  }]
const confirmPerson = [{
  value2: 'cf1',
  label: '潘宏清'
}, {
  value2: 'cf2',
  label: '蔡卫华'
}]
export default {
  data () {
    return {
      tableData: [{
        adress: '锌锅气刀',
        record: "r1",
        chargePerson: '生产清扫',
        checkPerson: 'cp1',
        confirmPerson:'cf1',
        note: ''
      },{
        adress: '锌锅气刀',
        record: "r2",
        chargePerson: '生产清扫',
        checkPerson: 'cp2',
        confirmPerson:'cf2',
        note: ''
      }],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      value: '',
      itemkey: 0,
      dialogFormVisible: false,
      options,
      checkPerson,
      confirmPerson,
      imagelist: [],
      form: {
        adress: '',
        checkPhoto: '',
        record: '',
        chargePerson: '',
        checkPerson: '',
        resultPhoto: [],
        confirmPerson: '',
        note: ''
      },
      formLabelWidth: '120px'
    }
  },
computed: {

    uploadDisabled:function() {
      console.log(this.imagelist.length >0)
        return this.imagelist.length >0
    },

},
watch:{
  'imagelist'(newval){
    console.log(111111)
    console.log(newval)

  }
},
  methods: {
    //on-success
        fileChange(file, fileList) {
          this.progress = 0
          this.imagelist.push(file)
          console.log("fileChange")
        },
    //自定义colum的label
    renderHeader(h, {column}) {
    	return [h('div', [
        h('span',{style:'float:left;font-size:12px;'},'20150316'),
    		h('span',{style:'font-size:24px;'},'C508机组通道线的点检表'),
    		h('span',{style:'float:right;font-size:12px;'},'报表编号：DX-508-04')
    	])];
    },
    handleRemove (file,index) {
      // console.log("1111",index)
      // console.log("1111",this.$refs)
       var s = 'pictureUpload'+index
      // console.log(s)
      this.$refs[s].handleRemove(file)
    },
    handleRemove2 (file,index) {
      var s = 'pictureUploa'+index
      this.$refs[s].handleRemove(file)
    },
    handlePictureCardPreview (file) {
      // console.log(this.$refs.upload.uploadFiles)
      // console.log(this.imagelist)
      // console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    handlechange () {
      //this.$forceUpdate()
    },
    handleclick (values) {
      this.tableData.push({ events: [], name: '' })
      this.tableData.splice(this.tableData.length - 1, 1)
      //this.$forceUpdate()
    },
    takephoto () {
      navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,/* ,sourceType:1 */
        saveToPhotoAlbum: true
        })
      function onSuccess(imageData) {
         // alert("success")
       }
      function onFail(message) {
        // alert("fail")
    }
  },
  //新增
  add(){
    this.dialogFormVisible = true
  },
  clickAddConfirm(value){
    console.log("value",value)
    this.tableData.push(value)
    console.log("tabledata",this.tableData)
    this.form = {
        adress: '',
        checkPhoto: '',
        record: '',
        chargePerson: '',
        checkPerson: '',
        resultPhoto: [],
        confirmPerson: '',
        note: ''
      }
    this.dialogFormVisible = false
  }
  }
}
</script>

<style>
.clearfix:after,.clearfix:before{
content: "";
display: table;
}
.clearfix:after{
clear: both;
}
.clearfix{
*zoom: 1;
}
.disabled .el-upload--picture-card {
    display: none;
}
</style>
