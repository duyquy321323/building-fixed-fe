import "./BoxHead.css";
    
function BoxHead(props) {
    return(
        <>
            <div className="box-head">
                {props.children}
            </div>
        </>
    );
}

export default BoxHead;