import { useContext, useState } from 'react'
import './write.css'
import { Context } from '../../context/Context'
import { axiosInstance } from '../../config'

export default function Write() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data = new FormData()
      //add Data.now() to prevent user uploading photos with the same name
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axiosInstance.post('/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post('/posts', newPost)
      window.location.replace('/post/' + res.data._id)
    } catch (err) {}
  }
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <h2 className="title">Add a new blog here</h2>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Blog title..."
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="upload">
            <label htmlFor="fileInput"> Upload cover image here</label>
            <i className="writeIcon fas fa-upload"></i>
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder=""
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}
