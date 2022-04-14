import "../index.css"
export default function NotFound(){
    return(
        <>
        <div>
        <h1 className="nf-head">
            Oops.
        </h1>
        <div className="nf-err">
            404
        </div>
        </div>
        <h1 className="nf-sub">
            This page doesn't Exist!
            <br></br>
            <a className="nf-a" href="/"> Home</a>
        </h1>
        
        </>
        );
}