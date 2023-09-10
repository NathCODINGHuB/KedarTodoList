
import {useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import * as style from './styledComponents'
import ListItemComponent from '../ListItemComponent'






const MainComponent = ()=>{

    const [newTodo,ChangeNewTodo] = useState('')
    const [ListData, SetListData] = useState([])
    useEffect(()=>{
        const Data = localStorage.getItem('Todo_list_data')
        if (Data){
            SetListData(JSON.parse(Data))
        }
        else{
            SetListData([])
        }
    },[])
    

    const saveData =()=>{
        localStorage.setItem('Todo_list_data',JSON.stringify(ListData))
    }

    const NewTodoInput = (event)=>{
        ChangeNewTodo(event.target.value)

    }

    const AddNewTodo = ()=>{
        const text = newTodo.trim()

        if (text !==''){

            const NewListItem = {iscomplited:false,Text:text,id:uuidv4()}

            SetListData(prevList=>[...prevList,NewListItem])
            ChangeNewTodo('')

        }
    }

    



    const ChangeStaus = (id,val)=>{
        SetListData(prevList=>prevList.map(each=>{
            if(each.id===id){
                return {...each,iscomplited:val}
            }
            else {
                return each
            }
        }))
    }

    
    
    return(<style.MainContainer>
    <style.CardContainer>
        <style.Heading>
            To do List
        </style.Heading>
        <style.InputContainer>
        <style.InputEl onChange={NewTodoInput} value = {newTodo} placeholder='Enter New To Do List Item' type='text'/>
        <style.Button onClick={AddNewTodo}>Add Todo</style.Button>
        </style.InputContainer>
        <style.TodoListContainer>

            {ListData.map(each=><ListItemComponent SetListData={SetListData}  ChangeStaus={ChangeStaus} key={each.id} data ={each} />)}

            
            
        </style.TodoListContainer>
        <style.InputContainer>
        <style.SaveButton type='button' onClick={saveData}>Save Todo List</style.SaveButton>
        </style.InputContainer>
    </style.CardContainer>

</style.MainContainer>)}

export default MainComponent