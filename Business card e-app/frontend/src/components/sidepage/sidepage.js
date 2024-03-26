import React from "react"
import './sidepage.css'
class Sidepage extends React.Component {
    render() {
        return (
            <div className=" sidepage">
                <div className=" first_col px-lg-5 px-md-5 " styles={{width:"100%"}}>
                    <p className="h5 lp_ip title">
                        Lorem Ipsum
                        <i className="fa fa-chevron-up"></i>
                    </p>
                    <hr />
                    <p className="side-heading">SPECIAL OFFER FOR YOU</p>
                    <p className="Para">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s. When an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting.
                        Remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and morerecently with desktop publishing software like Aldus
                        Pagemaker including versions of Lorem ipsum.
                    </p>
                    <hr />
                    <p>$295 Annual fee</p>
                </div>
            </div>
        )

    }
}
export default Sidepage

