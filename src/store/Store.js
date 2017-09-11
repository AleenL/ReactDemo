import { createStore } from 'redux'



const data = {
	user:{
		user:'',
		id:'',
		Email:''
	},
	Weather:{
		today:{},
		now:{},
		future:{},
	},
	city:{
		city_name:'',
		city_id:'',
		city_pinyin:'',
	},
	future:{

	},
	theme:[
		{type1:{theme:'',state:false}},
		{type2:{theme:'',state:true}},
		{type3:{theme:'',state:false}}
	],

}
const reducer = (state = data, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});


const store = createStore(reducer)
const getstate = store.getState()

export default getstate