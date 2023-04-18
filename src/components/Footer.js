import React from "react"
import SignOut from "./SignOut";

const Footer = ()=>{
    return(
        <>
            <div className={"footer_container"}>
                <h2 className="logo_footer">ReadingJournal</h2>
                <SignOut/>
            </div>
        </>
    )
}
export default Footer