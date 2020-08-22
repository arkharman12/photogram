import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const fileTypes = ["image/png", "image/jpeg", "image/jpg"]

    function changeHandler(e) {
        let selectedFile = e.target.files[0]

        if (selectedFile && fileTypes.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError("")
        } else {
            setFile(null)
            setError("Please select an image (png, jpeg or jpg)")
        }
    }
    
    return (
        <form>
            <label htmlFor="file">+
            <input type="file" id="file" onChange={changeHandler} />
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm
