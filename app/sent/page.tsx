import React from 'react';

const Sent = () => {
    
    return (
        <div className={"authWrapper"}>
            <div className={"authContent"}>
                <div className={"header"}>
                    <h3>
                        Oila connect |&nbsp;
                        <span>
                        Email sent
                        </span>
                    </h3>
                </div>
                <div className="content text-center">
                    <h3>Authentication Link Sent</h3>

                    <p>A link has been sent to your mail, <br/> you can close this page, then check your inbox to continue</p>

                    <div className="credit credit--sm mt-5">
                        By codepraycode
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sent;