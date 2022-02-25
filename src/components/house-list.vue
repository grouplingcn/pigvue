<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" id="tab">
    <el-tab-pane label="最新" name="first">
      <div>
        <ul class="list" v-if="houseList && houseList.length" ref="list" :style="{'max-height': height > 0 ? height :'89vh'}">
          <li @click="handleClick(item)" v-for="item in houseList" :key="`${item.uid}-${item.source}`">
            <!--<div class="left">-->
              <!--<template v-if="item.pictures && item.pictures.length">-->
                <!--<transition name="el-fade-in">-->
                  <!--<i v-show="!imagesLoadingMap[item.pictures[0]]"-->
                    <!--class="el-icon-loading loading-icon"></i>-->
                <!--</transition>-->
                <!--<transition name="el-fade-in">-->
                  <!--<img :src="item.pictures[0]"-->
                      <!--v-show="imagesLoadingMap[item.pictures[0]]"-->
                      <!--@load="imageLoading(item.pictures[0],imagesLoadingMap)"/>-->
                <!--</transition>-->
              <!--</template>-->
            <!--</div>-->
            <div class="left">
              <template v-if="item.pictures && item.pictures.length">
                <transition name="el-fade-in">
                  <img
                      v-lazy="JSON.parse(item.pictures)[0]"
                      />
                </transition>
              </template>
            </div>
            <div class="right">
              <div class="content">
                <a class="title" href="javascript:;"  :title="item.title ?
                  item.title : item.location">{{item.title ?
                  item.title : item.location}}</a>
                <div class="price" v-if="item.price > 0">
                  {{item.price}}<span> /月</span>
                </div>
              </div>
              <!--<div class="source">-->
                <!--来源: {{item.displaySource}}-->
              <!--</div>-->
            </div>
          </li>
          <li v-if="loading" class="text-center loading">
            <i class="el-icon-loading"></i>
          </li>
          <li v-if="over" class="text-center loading">
            <span>没有更多数据了</span>
          </li>
        </ul>
        <div v-else class="text-center">暂无数据</div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="收藏" name="second">
      <div>
        <ul class="list" v-if="collectHouseList && collectHouseList.length" ref="list" :style="{'max-height': height > 0 ? height :'89vh'}">
          <li @click="handleClick(item)" v-for="item in collectHouseList" :key="`${item.uid}-${item.source}`">
            <!--<div class="left">-->
              <!--<template v-if="item.pictures && item.pictures.length">-->
                <!--<transition name="el-fade-in">-->
                  <!--<i v-show="!imagesLoadingMap[item.pictures[0]]"-->
                    <!--class="el-icon-loading loading-icon"></i>-->
                <!--</transition>-->
                <!--<transition name="el-fade-in">-->
                  <!--<img :src="item.pictures[0]"-->
                      <!--v-show="imagesLoadingMap[item.pictures[0]]"-->
                      <!--@load="imageLoading(item.pictures[0],imagesLoadingMap)"/>-->
                <!--</transition>-->
              <!--</template>-->
            <!--</div>-->
            <div class="left">
              <template v-if="item.pictures && item.pictures.length">
                <transition name="el-fade-in">
                  <img
                      v-lazy="JSON.parse(item.pictures)[0]"
                      />
                </transition>
              </template>
            </div>
            <div class="right">
              <div class="content">
                <a class="title" href="javascript:;"  :title="item.title ?
                  item.title : item.location">{{item.title ?
                  item.title : item.location}}</a>
                <div class="price" v-if="item.price > 0">
                  {{item.price}}<span> /月</span>
                </div>
              </div>
              <!--<div class="source">-->
                <!--来源: {{item.displaySource}}-->
              <!--</div>-->
            </div>
          </li>
          <li v-if="loading" class="text-center loading">
            <i class="el-icon-loading"></i>
          </li>
          <li v-if="over" class="text-center loading">
            <span>没有更多数据了</span>
          </li>
        </ul>
        <div v-else class="text-center">暂无数据</div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="历史" name="third">
      <div>
        <ul class="list" v-if="historyHouseList && historyHouseList.length" ref="list" :style="{'max-height': height > 0 ? height :'89vh'}">
          <li @click="handleClick(item)" v-for="item in historyHouseList" :key="`${item.uid}-${item.source}`">
            <!--<div class="left">-->
              <!--<template v-if="item.pictures && item.pictures.length">-->
                <!--<transition name="el-fade-in">-->
                  <!--<i v-show="!imagesLoadingMap[item.pictures[0]]"-->
                    <!--class="el-icon-loading loading-icon"></i>-->
                <!--</transition>-->
                <!--<transition name="el-fade-in">-->
                  <!--<img :src="item.pictures[0]"-->
                      <!--v-show="imagesLoadingMap[item.pictures[0]]"-->
                      <!--@load="imageLoading(item.pictures[0],imagesLoadingMap)"/>-->
                <!--</transition>-->
              <!--</template>-->
            <!--</div>-->
            <div class="left">
              <template v-if="item.pictures && item.pictures.length">
                <transition name="el-fade-in">
                  <img
                      v-lazy="JSON.parse(item.pictures)[0]"
                      />
                </transition>
              </template>
            </div>
            <div class="right">
              <div class="content">
                <a class="title" href="javascript:;"  :title="item.title ?
                  item.title : item.location">{{item.title ?
                  item.title : item.location}}</a>
                <div class="price" v-if="item.price > 0">
                  {{item.price}}<span> /月</span>
                </div>
              </div>
              <!--<div class="source">-->
                <!--来源: {{item.displaySource}}-->
              <!--</div>-->
            </div>
          </li>
          <li v-if="loading" class="text-center loading">
            <i class="el-icon-loading"></i>
          </li>
          <li v-if="over" class="text-center loading">
            <span>没有更多数据了</span>
          </li>
        </ul>
        <div v-else class="text-center">暂无数据</div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="less" scoped>
  @import url("//unpkg.com/element-ui@2.15.3/lib/theme-chalk/index.css");
  @import "./../scss/house-list";
  .content{
    .title{
      white-space:normal;
    }
  }
  /deep/ .el-tabs__nav{
    width:100%!important;
    text-align: center!important;
  }
  /deep/ .el-tabs__active-bar{
    width:120px!important;
    text-align: center!important;
  }
  
</style>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        over: false,
        loading: false,
        imagesLoadingMap: {},
      };
    },
    methods: {
      // handleClick(tab, event) {
        
      // },
      handleClick(item) {
        this.$emit('click',item)
      },
      toggleTab: function(tab) {
        this.currentTab = tab;  // tab 为当前触发标签页的组件名
      }
    },
    props: {
      height:{},
      houseList: {
        default() {
          return []
        }
      },
      collectHouseList: {
        default() {
          return []
        }
      },
      historyHouseList: {
        default() {
          return []
        }
      }
    },
    mounted(){
      this.$socket.emit('connect', 1)  
      this.sockets.subscribe('new_data', (data) => {
        var arrayData = JSON.parse(data);
        
        for (var key in arrayData) {
          //过滤为当前城市
          if(arrayData[key]['city'] != this.$route.query.city) {
            arrayData.splice(key,1)
            return
          }
          // 过滤为 ${item.uid}-${item.source} 唯一
          for (var k in this.houseList) {
            if(this.houseList[k]['uid'] == arrayData[key]['uid'] && this.houseList[k]['source'] == arrayData[key]['source']) {
              arrayData.splice(key,1)
            }
          }
        }
        for (var k in arrayData) {
          this.houseList.unshift(arrayData[k]);
          // console.log(arrayData[k])
          if (arrayData.length > 100) arrayData.pop();
        }
        
      })
    },
    sockets: {
      connect() {
        console.log('socket connect success')
      },
    }
  };
</script>


