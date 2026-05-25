
import { useRef ,useState } from "react";

// Controlled & Uncontrolled components
const initialFormData={
    usename:"",
    bio:"",
    country:"",
    gender:"",
    agree:false
};

export function ControlledForm(){
    const [formData,setFormData] = useState(initialFormData);
    
    // Uncontrolled file input
    const fileRef = useRef(null);

    function handleChange(event){
        const {name,value,checked,type} =event.target;

        setFormData((prevFormData)=>({
            ...prevFormData,
            [name]:type === "checkbox" ? checked : value,
        }));
    }

    // Form submit handler
    function handleSubmit(event){
        event.preventDefault();

        const uploadedFile = fileRef.current?.files?.[0] || null;
        const submittedData={
            ...formData,
            uploadedFileName: uploadedFile ? uploadedFile.name : "No file selected.",
        };
        console.log("Submitted form data:",submittedData);
        alert("Form submitted successfully");
    }

    // Reset form to initial state
    function handleReset(){
        setFormData(initialFormData);
        if(fileRef.current){
            fileRef.current.value = "";
        }
    }
    return(
        <section>
            <h2>Controlled Components</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" id="username"
                       value={formData.usename} 
                       onChange={handleChange}
                       placeholder="Enter username"
                    /> 
                    <br />
                    <textarea name="bio" id="bio"
                       value={formData.bio}
                       onChange={handleChange}
                       placeholder="Write a short bio" 
                    />
                    <br />
                    <select name="country" id="country"
                      value={formData.country}
                      onChange={handleChange}>
                        <option value="">Select country</option>
                        <option value="India">India</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="Korea">Korea</option>
                    </select>
                    <br />
                    <fieldset>
                        <legend>Gender</legend>
                        <label htmlFor="male">
                        <input type="radio" name="gender" id="male"
                           value="Male" checked={formData.gender === "Male"} 
                           onChange={handleChange}
                        />
                        Male
                        </label>
                        <label htmlFor="female">
                        <input type="radio" name="gender" id="female"
                           value="Female" checked={formData.gender === "Female"} 
                           onChange={handleChange}
                        />
                        Female
                        </label>
                    </fieldset>
                    <br />
                    <label htmlFor="agree">
                        <input type="checkbox" name="agree" id="agree"
                           checked={formData.agree} 
                           onChange={handleChange}
                        />
                        Accept Terms
                    </label>
                    <br />
                    <label htmlFor="resume">
                        Upload Resume
                    </label>
                    <input type="file" id="resume" ref={fileRef} />
                    <br />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
            <hr />
            <h3>Live form data preview</h3>
            <p>Usename: {formData.usename || "Not entered"}</p>
            <p>Bio: {formData.bio || "Not entered"}</p>
            <p>Country: {formData.country || "Not entered"}</p>
            <p>Gender: {formData.gender || "Not selected"}</p>
            <p>Accepted term?: {formData.agree || "Not entered"}</p>
            <p>Selected file: {fileRef.current?.file?.[0]?.name || "No file"}</p>
        </section>
    )
}