var STORAGE_KEY = 'tasks-vuejs'
var taskStorage = {
  fetch: function () {
    var tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    tasks.forEach(function (task, index) {
      task.id = index
    })
    taskStorage.uid = tasks.length
    return tasks
  },
  save: function (tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }
}		

		
var vm=new Vue({
  el: '#vue-task',
  data: {
  	items:taskStorage.fetch(),
  	inputValue:""
  },
  mounted:function(){

  },
  methods:{
  	add:function(){
  		var _this=this;
  		this.items.push({text:this.inputValue,completed:true});
  		this.inputValue="";
  	},
    removeTask: function (task) {
      this.items.splice(this.items.indexOf(task), 1)
    }
  },

  watch:{
  	items:{
  		handler:function(items){
  			taskStorage.save(items)
  		},
  		deep:true
  	}
  }
})