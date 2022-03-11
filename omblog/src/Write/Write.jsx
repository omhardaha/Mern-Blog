import "./Write.css";

export default function write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" class="fileInputLogo" >
                        <i class=" fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" className="fileInput" />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="tell your story"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
