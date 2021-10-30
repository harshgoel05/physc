import React, {useState} from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

interface IState {
  post: {
    title: string;
    department: string;
    location: string;
    description: string;
    emergency?: boolean
  }[]
}

const CreatePost = () => {
    const [emergency, setEmergency] = useState(false);
 console.log(emergency)
    const [input, setInput] = useState({
        title: "",
        department: "",
        location: "",
        description: "",
        emergency: false,
    })

    const [posts, createPost] = useState<IState["post"]>([{
        title: "",
        department: "",
        location: "",
        description: "",
        emergency: false,
    }])
    
    console.log(posts, `post created`)
    const handleChange = (e : any) => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const handleClick = () => {
        console.log(input)
        if(!input.title || !input.description || !input.location || !input.department){
            return
        }
        createPost([...posts, { 
            title: input.title,
            department: input.department,
            location: input.location,
            description: input.description,
            emergency: emergency,
        }])
        
    }

    const handleEmergency = () => {
        setEmergency(!emergency)
    }
    

    return (
        <div className="px-4 mb-5 flex-col"> 
        <p className="mb-5 text-xl font-bold mt-8">Create Post</p>
       <input type="text" placeholder="Title" className="bg-lightpurple text-inputblue placeholder-primary w-full p-4 mb-5 rounded-xl" value={input.title} onChange={handleChange} name="title"/>
       <div className="flex-col mb-12">
           <div className="flex mb-5 gap-7">
                <input type="text" placeholder="Department" className="bg-lightpurple text-inputblue placeholder-primary w-1/2 p-4 rounded-xl" value={input.department} onChange={handleChange} name="department"/>
                <input type="text" placeholder="Location" className="bg-lightpurple text-inputblue placeholder-primary w-1/2 p-4 rounded-xl" value={input.location} onChange={handleChange} name="location"/>
           </div>
            
            <textarea placeholder="Description" className="bg-lightpurple text-inputblue placeholder-primary rounded-xl w-full p-4 h-64" value={input.description} name="description" onChange={handleChange} />
       </div>
       
        <div className="flex justify-between">
            <div className="flex cursor-pointer text-red-500 justify-center items-center" onClick={handleEmergency}>
                {emergency ? (<MdCheckBox color="#FF4B4B" size={32} /> ) : <MdCheckBoxOutlineBlank  color="#FF4B4B" size={32} /> }
                
        <p className="text-red ml-2.5 text-base" >
            Emergency
        </p>
        
            </div>
            
       <button className="py-4 px-6 bg-darkpurple text-white text-base font-bold rounded-xl" onClick={handleClick}> <p>Create post </p></button>
        </div>
       
         
        </div>
       
    )
}

export default CreatePost;