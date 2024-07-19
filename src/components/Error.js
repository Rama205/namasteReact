import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    console.log(err)
    return <div>Error Page
        <h2>Error -Something went wrong</h2>
        <h3>{err.status}: {err.statusText}</h3>
    </div>
}

export default Error;