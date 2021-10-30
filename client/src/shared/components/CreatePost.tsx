import React, {useState} from 'react';
import Input from './InputBox/input';

interface IState {
  post: {
    title: string;
    department: string;
    location: string;
    description: string;
  }[]
}

const CreatePost = () => {
    const [input, setInput] = useState({
        title: "",
        department: "",
        location: "",
        description: "",
    })

    const [posts, createPost] = useState<IState["post"]>([{
        title: "",
        department: "",
        location: "",
        description: "",
    }])

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
        }])
        console.log(posts)
    }

    return (
        <div className="px-4 mb-5 flex-col"> 
        <p>Create Post</p>
       <input type="text" placeholder="Title" className="bg-lightpurple text-inputblue placeholder-primary" value={input.title} onChange={handleChange} name="title"/>
       <input type="text" placeholder="Department" className="bg-lightpurple text-inputblue placeholder-primary" value={input.department} onChange={handleChange} name="department"/>
       <input type="text" placeholder="Location" className="bg-lightpurple text-inputblue placeholder-primary" value={input.location} onChange={handleChange} name="location"/>
       <textarea placeholder="Description" className="AddToList-input" value={input.description} name="description" onChange={handleChange} />

       <button onClick={handleClick}>Submit</button>
       
         
        </div>
       
    )
}

export default CreatePost;