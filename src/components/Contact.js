const Contact=()=>{
    return <div className="font-bold p-2 m-2">Contact Us
        <h2 className="font-bold p-2 m-2">This is Namaste React learning searies</h2>
        <form>
            <input type="text" placeholder="name"className="border border-black p-2 m-2"/>
            <input type="text" placeholder="message" className="border border-black p-2 m-2"/>
            <button className="border border-black p-2 m-2 rounded-lg bg-green-200">Submit</button>
        </form>
    </div>
}

export default Contact;