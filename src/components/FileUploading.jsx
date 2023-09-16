import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FileUploading = () => {
  const { register, handleSubmit } = useForm();

    const [file, setfile] = useState([])

    const fileHandler = (e) => {
        console.log(e.target.files[0]);
        if(e.target.files[0]){
            if(e.target.files[0].size > 1024* 1000 *2){
                alert("File size is too big")
                //clear the file
                e.target.value = null;
            }
        }
    }


  const submitHandler = async(data) => {
    console.log(data);
    console.log(data.file[0])
    //create object of formdata
    const formData = new FormData();
    formData.append("file", data.file[0]);
    //validation []
    //formData.append("file", file);  // useState
    formData.append("name",data.name)

    const res = await axios.post("http://localhost:3001/upload/upload",formData)
    console.log(res.data);

  };
  return (
    <div>
      <div>
        <h1>File Uploading</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {/* <div>
                <input type="file" onChange={(e)=>setfile(e.target.files[0])}/>
                {file?.name}
            </div> */}
            <div>
                <input type="file" onChange={(e)=>{fileHandler(e)}}/>
            </div>
            
          <div className="form-group">
            <input type="file" className="form-control" {...register("file")} multiple/>
          </div>
          <div>
            <input type="text" className="form-control" {...register("name")} />

          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="UPLOAD">
              
            </input>
          </div>
        </form>
      </div>
    </div>
  );
};
