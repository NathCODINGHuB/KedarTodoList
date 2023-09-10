import {ImBin} from 'react-icons/im'
import * as style from './styledComponents'

const ListItemComponent = (props)=>{

    const {data,ChangeStaus,SetListData} = props 

    const {Text,iscomplited,id} = data 

    const Stauschanged=(event)=>{
        const val = event.target.checked
        console.log(val)
        ChangeStaus(id,val)

    }

    const ItemDelete =()=>{

        SetListData(prevList=>prevList.filter(each=>each.id !== id))

    }

    

    return(
        <style.TodoItem>
            <style.Chuckedel onChange={Stauschanged} value={iscomplited}  type='checkbox'/> 
            <style.TodoText iscomplited = {iscomplited.toString()} >{Text}</style.TodoText>
            <style.BinButton type='button' onClick={ItemDelete}>
            <ImBin/>
            </style.BinButton>
            
               
            </style.TodoItem>

    )
}

export default ListItemComponent