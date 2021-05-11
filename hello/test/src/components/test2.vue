<template>
  <div>
    <el-button style="float: left;" @click="add">新增</el-button><el-button style="float: left;" @click="printExcel">打印</el-button><el-button style="float: left;" @click="takephoto">拍照</el-button><span style="float: left;">已完成{{count1}}</span><span style="float: left;">未完成{{count2}}</span>
    <el-table :data="tableData"  height="500" :key="itemkey" size="mini" fit="false" :header-cell-style="{background:'#4DFFFF',color:'#606266'}">
      <el-table-column :render-header="renderHeader" label="C508机组通道线的点检表,2819218" align="center">
        <el-table-column>
          <el-table-column label="序号" width="120" align="center">
            <template slot-scope="scope">
            {{scope.$index +1}}
            </template>
          </el-table-column>
          <el-table-column label="地点、设备" width="120" align="center">
            <template slot-scope="scope">
            {{scope.row.adress}}
            </template>
          </el-table-column>
          <el-table-column label="检查情况" align="center">
            <el-table-column label="照片" width="180" align="center">
              <template slot-scope="scope">
                <!-- :class="{disabled:uploadDisabled}" -->
              <el-upload :limit='1' action="#" list-type="picture-card" :on-change="(file, fileList) => {fileChange(file, fileList, scope.$index,scope)}" class="disabled1"  :auto-upload="false" :ref="'pictureUpload'+scope.$index">
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
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file,scope.$index,scope)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
               </template>
              <el-button @click="takephoto">拍照</el-button>
            </el-table-column>
            <el-table-column label="上传时间" width='100' align="center">
              <template slot-scope="scope">
              {{scope.row.time1}}
              </template>
            </el-table-column>


            <el-table-column label="记录" width="150" align="center" >
              <template slot-scope="scope">
              <el-select  @change="handleclick" v-model="scope.row.record" clearable placeholder="请选择" allow-create filterable>
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
          <el-table-column label="责任方" width="120" align="center">
            <template slot-scope="scope">
            <el-select  @change="handleclick" v-model="scope.row.chargePerson" clearable placeholder="请选择">
              <el-option
                v-for="item in chargePerson"
                :key="item.value3"
                :label="item.label"
                :value="item.value3">
              </el-option>
            </el-select>
            </template>
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
            <el-upload action="#" list-type="picture-card" :on-change="(file, fileList) => {fileChange2(file, fileList, scope.$index,scope)}" class="disabled2" :auto-upload="false" :ref="'pictureUploa'+scope.$index">
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
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove2(file,scope.$index,scope)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            </template>
            <el-button @click="takephoto">拍照</el-button>
          </el-table-column>
          <el-table-column label="上传时间" width='100' align="center">
            <template slot-scope="scope">
            {{scope.row.time2}}
            </template>
          </el-table-column>
          <el-table-column label="评价" width='100' align="center">
            <template slot-scope="scope">
            <el-select  @change="handleclick" v-model="scope.row.assess" clearable placeholder="请选择">
            <el-option label="1" value="1"><i class="iconfont icon-radio-on"></i></el-option>
            <el-option label="0.5" value="0.5"><i class="iconfont icon-insert-top"></i></el-option>
            <el-option label="0" value="0"><i class="iconfont icon-cha"></i></el-option>
            </el-select>
            </template>
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
    <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
   <el-dialog width="30%" title="新增" :visible.sync="dialogFormVisible" :modal-append-to-body="false" append-to-body>
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
            <el-option label="朱炜" value="朱炜"></el-option>
            <el-option label="毛飞俊" value="毛飞俊"></el-option>
            <el-option label="潘宏清" value="潘宏清"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理结果">
          <el-button @click="takephoto">拍照</el-button>
        </el-form-item>
        <el-form-item label="确认人">
          <el-select v-model="form.confirmPerson" placeholder="选择记录">
            <el-option label="潘宏清" value="潘宏清"></el-option>
            <el-option label="蔡卫华" value="蔡卫华"></el-option>
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
import saveAs from 'file-saver'
const ExcelJS = require('exceljs');
var moment = require('moment');
const options = [{
  value: '气刀刀架锌渣',
  label: '气刀刀架锌渣'
}, {
  value: '锌粉积聚',
  label: '锌粉积聚'
}]
const checkPerson = [{
    value1: '朱炜',
    label: '朱炜'
  }, {
    value1: '毛飞俊',
    label: '毛飞俊'
  },{
    value1: '潘宏清',
    label: '潘宏清'
  }]
const confirmPerson = [{
  value2: '潘宏清',
  label: '潘宏清'
}, {
  value2: '蔡卫华',
  label: '蔡卫华'
}]
const chargePerson = [{
  value3: '生产',
  label: '生产'
}, {
  value3: '设备(电仪)',
  label: '设备(电仪)'
},{
  value3: '设备(机械)',
  label: '设备(机械)'
},{
  value3: '工艺',
  label: '工艺'
}]
const assess = [{
  value4: '1',
  label: '1'
}, {
  value4: '0.5',
  label: '0.5'
},{
  value4: '0',
  label: '0'
}]
export default {
  data () {
    return {
      tableData: [{
        adress: '锌锅气刀',
        record: "气刀刀架锌渣",
        time1:"",
        time2:"",
        chargePerson: '生产',
        checkPerson: '毛飞俊',
        confirmPerson:'潘宏清',
        note: '',
        photo1:'',
        photo2:''
      },{
        adress: '锌锅气刀',
        record: "锌粉积聚",
        time1:"",
        time2:"",
        chargePerson: '生产',
        checkPerson: '潘宏清',
        confirmPerson:'蔡卫华',
        note: '',
        photo1:'',
        photo2:''
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
      chargePerson,
      assess,
      count1:0,
      count2:0,
      imagelist: [],
      form: {
        adress: '',
        checkPhoto: '',
        time1:"",
        record: '',
        time2:"",
        chargePerson: '',
        checkPerson: '',
        resultPhoto: [],
        confirmPerson: '',
        note: '',
        photo1:'',
        photo2:''
      },
      formLabelWidth: '120px',
      img1:'',
      img1arry:[],
      img2arry:[],
      img2:''
    }
  },
computed: {
    uploadDisabled:function() {
      console.log(this.imagelist.length >0)
        return this.imagelist.length >0
    },

},
watch:{

},
  methods: {

 createAndWriteFile(dataObj,write,onErrorCreateFile){
      //临时数据保存
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

      fs.root.getFile("1.xlsx", { create: true, exclusive: false }, function (fileEntry) {
          // fileEntry.name == 'someFile.txt'
          // fileEntry.fullPath == '/someFile.txt'
          try{
             write(fileEntry, dataObj)
             alert("打印完成")
          }catch(e){
            //TODO handle the exception
            alert(e)
          }


      }, onErrorCreateFile);
}, this.onErrorLoadFs)
},
     writeFile(fileEntry, dataObj) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter) {

            fileWriter.onwriteend = function() {
                console.log("Successful file write...");
                readFile(fileEntry);
            };

            fileWriter.onerror = function (e) {
                console.log("Failed file write: " + e.toString());
            };

            // If data object is not passed in,
            // create a new Blob instead.
            if (!dataObj) {
                dataObj = new Blob(['some file data'], { type: 'text/plain' });
            }

            fileWriter.write(dataObj);
        });
    },

    //文件创建失败回调
      onErrorCreateFile(error){
      alert("文件创建失败！")
    },

    //FileSystem加载失败回调
      onErrorLoadFs(error){
      alert("文件系统加载失败！")
    },


  getImageBlob(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            if (this.status == 200) {
               return this.response
            }
        };
        xhr.send();
    },
    //将tabledata转化为数组
    getTableArray(){
      var dd =  []
      for(let i =0;i<this.tableData.length;i++){
        var arr = []
        arr.push(i)
        arr.push(this.tableData[i].adress)
        arr.push(this.tableData[i].photo1)
        arr.push(this.tableData[i].time1)
        arr.push(this.tableData[i].record)
        arr.push(this.tableData[i].chargePerson)
        arr.push(this.tableData[i].checkPerson)
        arr.push(this.tableData[i].photo2)
        arr.push(this.tableData[i].time2)
        arr.push(this.tableData[i].confirmPerson)
        arr.push(this.tableData[i].note)
        arr.push('')
        arr.push('')
        dd.push(arr)
      }
      console.log(dd)
      return dd
    },

    //将blob图片转化为base64
   blobToBase64(blob,num) {
       return new Promise((resolve, reject) => {
         const fileReader = new FileReader();
         fileReader.onload = (e) => {
           resolve(e.target.result);
           if(num === 1){
            this.img1 = e.target.result
           }else if(num === 2){
            this.img2 = e.target.result
           }
         };
         // readAsDataURL
         fileReader.readAsDataURL(blob);
         fileReader.onerror = () => {
           reject(new Error('文件流异常'));
         };
       });
   },
   blobToDataURL(blob, callback) {
   var a = new FileReader();
   a.onload = function (e) { callback(e.target.result); }
   a.readAsDataURL(blob);
   },

    //打印excel
    printExcel(){
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('锌锅至出口通道线的点检表');
      sheet.columns = [
        { header: '', key: 'index', width: 9.63 },
        { header: '', key: 'place', width: 13.38},
        { header: '', key: 'photo', width: 19.25 },
        { header: '', key: 'time1', width: 15 },
        { header: '', key: 'record', width: 9.63 },
        { header: '', key: 'chargePerson', width: 9.5},
        { header: '', key: 'checkPerson', width: 7.25 },
        { header: '', key: 'result', width: 18.88 },
        { header: '', key: 'time2', width: 15 },
        { header: '', key: 'definePerson', width: 7.38 },
        { header: '', key: 'note', width: 7.38 },
      ];
      var A1 = sheet.getCell('A1');
      A1.value = '20150306'
      A1.font = {
        size: 10
      }
      A1.alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.mergeCells('C1:I1')
      sheet.getCell('I1').value = 'C508机组通道线的点检表'
      sheet.getCell('I1').font = {
        size: 20,
        bold: true
      }
      sheet.getCell('I1').alignment = { vertical: 'middle', horizontal: 'center' }
      sheet.mergeCells('J1:K1')
      sheet.getCell('J1').value = '报表编号：DX-508-04'
      sheet.getCell('J1').font = {
        size: 9
      }
      sheet.getCell('J1').alignment = { vertical: 'middle', horizontal: 'center' }


      sheet.mergeCells('A3','A4')
      sheet.getCell('A3').value = 'NO.'
      sheet.mergeCells('B3','B4')
      sheet.getCell('B3').value = '地方'
      sheet.mergeCells('C3','E3')
      sheet.getCell('C3').value = '检查情况'

      sheet.getCell('C4').value = '照片'
      sheet.getCell('D4').value = '时间'
      sheet.getCell('E4').value = '记录'

      sheet.mergeCells('F3','F4')
      sheet.getCell('F3').value = '责任方'

      sheet.mergeCells('G3','G4')
      sheet.getCell('G3').value = '检查人'

      sheet.mergeCells('H3','I3')
      sheet.getCell('H3').value = '处理结果'
      sheet.getCell('H4').value = '照片'
      sheet.getCell('I4').value = '时间'

      sheet.mergeCells('J3','J4')
      sheet.getCell('J3').value = '确认人'

      sheet.mergeCells('K3','K4')
      sheet.getCell('K3').value = '备注'

    var getarray = this.getTableArray()
    //从第五行开始插入数据，并设置行高
    for(let i =0;i<getarray.length;i++){
      sheet.insertRow(i+5,getarray[i])
      var row = sheet.getRow(i+5)
      row.height = 100
    }
    // //修改完后一定需要commit
    // table.commit();

    // //获取表的行
    // const rows = sheet.getRows(1,3)
    // rows.height = 100
    var d = 4
    for(var i = 0;i<this.img1arry.length;i++){
      if(this.img1arry[i]){
        var imageId1 = workbook.addImage({
          base64: this.img1arry[i],
          extension: 'jpg',
        });
        sheet.addImage(imageId1, {
          tl: { col: 2, row: d },
          br: { col: 3, row: d+1 }
        })
      }
      d++
    }

    var e = 4
    for(var i = 0;i<this.img2arry.length;i++){
       if(this.img2arry[i]){
      var imageId1 = workbook.addImage({
        base64: this.img2arry[i],
        extension: 'jpg',
      });
      sheet.addImage(imageId1, {
        tl: { col: 7, row: e },
        br: { col: 8, row: e+1 }
      })
      }
      e++
    }

    sheet.eachRow(function(row, rowNumber) {
      row.alignment = { vertical: 'middle', horizontal: 'center',wrapText: true }
    });

    //打印excel
    workbook.xlsx.writeBuffer().then((buffer)=> {
      var blob = new Blob([buffer], {type: "application/octet-stream"});
      // try{
      //   saveAs(blob,"test.xls")
      // }catch(e){
      //   //TODO handle the exception
      //   alert(e)
      // }
      try{
          this.createAndWriteFile(blob,this.writeFile,this.onErrorCreateFile)
      }catch(e){
        //TODO handle the exception
        alert(e)
      }

    });
    },





    // 获取上传时间
    getTime(){
    return moment(new Date(new Date())).format('YYYY-MM-DD,HH')
    },
    //on-success
    fileChange(file,fileList,index,scope) {
      // var d = this.getImageBlob(file.url)
      //读取blob文件转化为base64图片存入图片数组中
      this.blobToBase64(file.raw,1).then((res)=>{
        this.img1arry[index] = this.img1
      })
      document.querySelectorAll(".disabled1 .el-upload--picture-card")[index].style.display = "none"
      // 赋值time1
      console.log(scope.row.time1)
      scope.row.time1 = this.getTime()
      if(scope.row.time2 !== ""){
        this.count1++
        this.count2--
      }
    },
    //文件改变的时候
    fileChange2(file,fileList,index,scope) {
      this.blobToBase64(file.raw,2).then((res)=>{
        this.img2arry[index] = this.img2
      })
      document.querySelectorAll(".disabled2 .el-upload--picture-card")[index].style.display = "none"
      scope.row.time2 = this.getTime()
      if(scope.row.time1 !== ""){
        this.count1++
        this.count2--
      }
    },
    //自定义colum的label
    renderHeader(h, {column}) {
    	return [h('div', [
        h('span',{style:'float:left;font-size:12px;'},'20150316'),
    		h('span',{style:'font-size:24px;'},'C508机组通道线的点检表'),
    		h('span',{style:'float:right;font-size:12px;'},'报表编号：DX-508-04')
    	])];
    },
    handleRemove (file,index,scope) {
      // console.log("1111",index)
      // console.log("1111",this.$refs)
       var s = 'pictureUpload'+index
      // console.log(s)
      this.$refs[s].handleRemove(file)
      this.imagelist.pop()

      //删除bsae64图片数组中的指定下标的图片
      this.img1arry.splice(index,1)

      document.querySelectorAll(".disabled1 .el-upload--picture-card")[index].style.display = "block"
      scope.row.time1 = ""
      if(scope.row.time2 !==""){
        this.count1--
        this.count2++
      }
    },
    handleRemove2 (file,index,scope) {
      var s = 'pictureUploa'+index
      this.$refs[s].handleRemove(file)
      this.img2arry.splice(index,1)
      document.querySelectorAll(".disabled2 .el-upload--picture-card")[index].style.display = "block"
      scope.row.time2 = ""
      if(scope.row.time1 !==""){
        this.count1--
        this.count2++
      }
    },
    handlePictureCardPreview (file) {
      // console.log(this.$refs.upload.uploadFiles)
      // console.log(this.imagelist)
      // console.log(file)
      // console.log(fileList)
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
    this.count2++
  }
  },
created() {
  this.count2 = this.tableData.length
  this.getTableArray()

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
