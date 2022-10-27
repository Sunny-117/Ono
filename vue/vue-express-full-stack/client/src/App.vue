<template>
  <div>
    <search-form
      initial-type="less"
      @submit:data="submitData"
    ></search-form>
    <search-list
      :list-data="studentData"
    >{{ errorMsg }}</search-list>
  </div>
</template>

<script>

import { getStudents } from './services';
import { tableMsg } from './config';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';

export default {
  name: 'App',
  components: {
    SearchForm,
    SearchList
  },
  data () {
    return {
      studentData: [],
      errorMsg: tableMsg.INITIAL
    }
  },
  methods: {
    async submitData (data) {
      const { type, score } = data;
      this.showMsg('LOADING');

      try {
        const { errorNo, data } = await getStudents(type, score);

        setTimeout(() => {
          if (errorNo !== 0) {
            switch (errorNo) {
              case 1001:
                this.showMsg('NODATA');
                break;
              default:
                break;
            }
            return;
          }

          this.studentData = data;
        }, 1000);
      } catch (e) {
        this.showMsg('ERROR');
      }
    },
    showMsg (type) {
      const { ERROR, NODATA, LOADING } = tableMsg;
    
      this.studentData = [];
      
      switch (type) {
        case 'ERROR':
          this.errorMsg = ERROR;
          break;
        case 'NODATA':
          this.errorMsg = NODATA;
          break;
        case 'LOADING':
          this.errorMsg = LOADING;
          break;
        default:
          break;
      }
    }
  }  
}
</script>

<style>

</style>