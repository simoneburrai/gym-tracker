import { useState } from "react"

export default function EditTitleButtonInput({title, onChange}){


    const [editTitleMode, setEditTitleMode] = useState(false)

    return <>
        {!editTitleMode ? 
                    <button onClick={()=>setEditTitleMode(true)} className="modify-title-button">{title}</button> 
                    : 
                    <input
                        className="modify-title-button"
                        defaultValue={title}
                        onBlur={onChange}
                        onKeyDown={(e)=>{
                            const currentKey = e.key
                            if(currentKey === "Enter"){
                                onChange(e)
                            }
                        }}
                    />
        }
    </>
}



