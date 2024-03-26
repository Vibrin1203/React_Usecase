import React from "react"
import './frontpage.css'
import axios from "axios"
import swal from 'sweetalert';
// import Validation from "./validations";

class Frontpage extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();

    this.state = {
      email: "",
      businessname: "",
      businesscard: "",
      businessaddress1: "",
      businessaddress2: "",
      zipcode1: "",
      businessphonenumber: "",
      firstname: "",
      middlename: "",
      lastname: "",
      cardname: "",
      checkbox: "",
      homeaddress1: "",
      homeaddress2: "",
      zipcode2: "",
      Bill: "",
      display: false,

      //error
      emailErr: "",
      emailFlag: false,
      nameErr: "",
      nameFlag: false,
      cardErr: "",
      cardFlag: false,
      baErr: "",
      baFlag: false,
      zip1Err: "",
      zip1Flag: false,
      bnumErr: "",
      bnumFlag: false,
      fnameErr: "",
      fnameFlag: false,
      lnameErr: "",
      lnameFlag: false,
      cardnameErr: "",
      cardnameFlag: false,
      haErr: "",
      haFlag: false,
      zip2Err: "",
      zip2Flag: false,
      submissionFlag: true,
      submiterror: ""
    }
  }

  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value });
  }
  checkHandler = () => {
    this.setState({ homeaddress1: this.state.businessaddress1, homeaddress2: this.state.businessaddress2, zipcode2: this.state.zipcode1, zip2Flag: true, haFlag: true })
  }
  radioHandler = (e) => {
    this.setState({ Bill: e.target.value })
  }

  popup = (e) => {
   
      swal({
        title: "Your Form has been successfully!",
        icon: "success",
      });
    
    console.log(this.state.submissionFlag);

  }

  submitHandler = (e, data) => {

    // console.log(this.state.emailFlag, this.state.nameFlag, this.state.cardFlag, this.state.baFlag, this.state.zip1Flag,
    //   this.state.bnumFlag, this.state.fnameFlag,
    //   this.state.lnameFlag, this.state.cardnameFlag, this.state.haFlag, this.state.zip2Flag);
    if (this.state.emailFlag && this.state.nameFlag && this.state.cardFlag && this.state.baFlag && this.state.zip1Flag &&
      this.state.bnumFlag && this.state.fnameFlag &&
      this.state.lnameFlag && this.state.cardnameFlag && this.state.haFlag && this.state.zip2Flag) {
      console.log(data);

      this.popup()
      axios.post("http://localhost:5000/adddetails", data)
        .then((res) => {
          if (res.data == "success") {
            console.log("success");
          }
        })
        .catch((err) => {
          console.log("error", err);
        })
        
      this.setState({
        email: "",
        businessname: "",
        businesscard: "",
        businessaddress1: "",
        businessaddress2: "",
        zipcode1: "",
        businessphonenumber: "",
        firstname: "",
        middlename: "",
        lastname: "",
        cardname: "",
        checkbox: "",
        homeaddress1: "",
        homeaddress2: "",
        zipcode2: "",
        Bill: "",

        emailFlag: false,
        nameFlag: false,
        cardFlag: false,
        baFlag: false,
        zip1Flag: false,
        bnumFlag: false,
        fnameFlag: false,
        lnameFlag: false,
        cardnameFlag: false,
        haFlag: false,
        zip2Flag: false,
        submiterror: "",
        submissionFlag:true,
      });
      //  alert("Form added successfully")
      // swal({

      //   title: "Your Order has been placed successfully!",

      //   icon: "success",

      // });

    }
    else {
      this.setState({ submiterror: "Please fill all req feilds",submissionFlag:false })
      
    }

  }
  // validate=Validation()
  validate = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    //email validation
    if (n === "email") {
      let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
      if (v === "") {
        this.setState({ emailErr: "Please enter the Email.", emailFlag: false })
      }
      else if (!re.test(v)) {
        this.setState({ emailErr: "please enter Email in a specific formate", emailFlag: false })
      }
      else
        this.setState({ emailErr: "", emailFlag: true })
    }
    // business name validation
    else if (n === "businessname") {
      if (v === "") {
        this.setState({ nameErr: "Please enter the User Name.", nameFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ nameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", nameFlag: false })
      }
      else
        this.setState({ nameErr: "", nameFlag: true })
    }

    //business card validation
    else if (n === "businesscard") {
      if (v === "") {
        this.setState({ cardErr: "Please enter the Card Name.", cardFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ cardErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", cardFlag: false })
      }
      else
        this.setState({ cardErr: "", cardFlag: true })
    }

    //addressname validation
    else if (n === 'businessaddress1') {
      if (v === "") {
        this.setState({ baErr: "Please enter the Address.", baFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ baErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", baFlag: false })
      }
      else
        this.setState({ baErr: "", baFlag: true })
    }

    //zipcode validation
    else if (n === 'zipcode1') {
      let re = new RegExp("^[0-9]{6}$")
      if (v === "") {
        this.setState({ zip1Err: "Please enter the ZipCode.", zip1Flag: false })
      }
      else if (!re.test(v)) {
        this.setState({ zip1Err: "Please Enter the Only Numbers", zip1Flag: false })
      }
      else
        this.setState({ zip1Err: "", zip1Flag: true })
    }

    //phone number validation
    else if (n === 'businessphonenumber') {
      let re = new RegExp("^[0-9]{10}$")
      // let re="/^[0-9]{10}$/"
      if (v === "") {
        this.setState({ bnumErr: "Please enter Business Phone Number.", bnumFlag: false })
      }
      else if (!re.test(v)) {
        this.setState({ bnumErr: "Please Enter the Only Numbers", bnumFlag: false })
      }
      else
        this.setState({ bnumErr: "", bnumFlag: true })
    }

    //firstname validation
    else if (n === "firstname") {
      if (v === "") {
        this.setState({ fnameErr: "Please enter your First Name.", fnameFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ fnameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", fnameFlag: false })
      }
      else
        this.setState({ fnameErr: "", fnameFlag: true })
    }

    //lastname validation
    else if (n === "lastname") {
      if (v === "") {
        this.setState({ lnameErr: "Please enter your Last Name.", lnameFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ lnameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", lnameFlag: false })
      }
      else
        this.setState({ lnameErr: "", lnameFlag: true })
    }

    //cardname validation
    else if (n === "cardname") {
      if (v === "") {
        this.setState({ cardnameErr: "Please enter the Card Name.", cardnameFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ cardnameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", cardnameFlag: false })
      }
      else
        this.setState({ cardnameErr: "", cardnameFlag: true })
    }

    //home address validation
    else if (n === 'homeaddress1') {
      if (v === "") {
        this.setState({ haErr: "Please enter the Address.", haFlag: false })
      }
      else if (v.length <= 4) {
        this.setState({ haErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char", haFlag: false })
      }
      else
        this.setState({ haErr: "", haFlag: true })
    }

    //zipcode validation
    else if (n === 'zipcode2') {
      // let re = "\d{3}(-\d{3})?"
      let re = new RegExp("^[0-9]{6}$")
      if (v === "") {
        this.setState({ zip2Err: "Please enter the ZipCode.", zip2Flag: false })
      }
      else if (!re.test(v)) {
        this.setState({ zip2Err: "Please Enter the Only Numbers", zip2Flag: false })
      }

      else
        this.setState({ zip2Err: "", zip2Flag: true })
    }


  }


  render() {

    let { email, businessname, businesscard, businessaddress1, businessaddress2, zipcode1,
      businessphonenumber, firstname, middlename, lastname, cardname, checkbox, homeaddress1,
      homeaddress2, zipcode2, Bill, submissionFlag } = this.state
    return (
      <div className="frontpage " >
        <div className="container">
          <div className="row ">
            {/* Form */}
            <div className="col-lg-8 pt-5" style={{ background: "linear-gradient(135deg,#eeaeca,#d5e8ff)", width: "100%" }}>
              <p className="h2 mb-3 firstheading">Apply in minutes. Get a decision in Seconds.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  this.submitHandler(e, {
                    "email": email, "businessname": businessname, "businesscard": businesscard, "businessaddress1": businessaddress1, "businessaddress2": businessaddress2,
                    "zipcode1": zipcode1, "businessphonenumber": businessphonenumber,
                    "firstname": firstname, "middlename": middlename, "lastname": lastname, "cardname": cardname,
                    "checkbox": checkbox, "homeaddress1": homeaddress1, "homeaddress2": homeaddress2, "zipcode2": zipcode2,
                    "Bill": Bill
                  })
                 
                }}>
                <div className="form-group mb-3">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder=""
                    name="email"
                    value={email}
                    id="email"
                    onChange={(e) => {
                      this.validate(e);
                      this.changeHandler(e)
                    }}

                    onBlur={(e) => this.validate(e)}

                  />
                  <p className="ms-1 text-danger">{this.state.emailErr}</p>
                </div>

                <p className="h3 pb-2 firstheading">
                  ENTER YOUR BUSINESS INFORMATION
                </p>

                <div className="row mb-4">
                  <div className="col-lg-6">

                    <div className="form-group">
                      <label className="form-label">LEGAL BUSINESS NAME</label>
                      <input type="text" className="form-control" name="businessname" value={this.state.businessname}
                        onChange={(e) => {
                          this.validate(e);
                          this.changeHandler(e)
                        }}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.nameErr}</p>
                    </div>

                  </div>

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label className="form-label"
                      >BUSINESS NAME ON CARD</label
                      >
                      <input type="text" className="form-control" name="businesscard" value={this.state.businesscard}
                        onChange={(e) => {
                          this.validate(e);
                          this.changeHandler(e)
                        }}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.cardErr}</p>

                    </div>

                  </div>
                </div>

                <div className="form-group mb-4 ">

                  <label >BUSINESS ADDRESS LINE 1</label>
                  <input type="text" className="form-control" name="businessaddress1" value={this.state.businessaddress1}
                    onChange={(e) => {
                      this.validate(e);
                      this.changeHandler(e)
                    }}
                    onBlur={(e) => this.validate(e)} />
                  <p className="ms-1 text-danger namerr">{this.state.baErr}</p>

                </div>
                <div className="row mb-4 ">
                  <div className="col-lg-6">
                    <div className="form-group">

                      <label >BUSINESS ADDRESS LINE 2</label>
                      <input
                        type="text"
                        name="businessaddress2" value={this.state.businessaddress2} onChange={(e) => this.changeHandler(e)}
                        className="form-control"

                      />


                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">

                      <label >ZIP CODE</label>
                      <input
                        type="text"
                        name="zipcode1" value={this.state.zipcode1}
                        onChange={(e) => {
                          this.validate(e);
                          this.changeHandler(e)
                        }}
                        onBlur={(e) => this.validate(e)}
                        className="form-control"

                      />
                      <p className="ms-1 text-danger namerr">{this.state.zip1Err}</p>


                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">

                  <label >BUSINESS PHONE NUMBER</label>
                  <input
                    type="num"
                    name="businessphonenumber" value={this.state.businessphonenumber}
                    onChange={(e) => {
                      this.validate(e);
                      this.changeHandler(e)
                    }}
                    className="form-control"
                    onBlur={(e) => this.validate(e)}
                  />
                  <p className="ms-1 text-danger namerr">{this.state.bnumErr}</p>
                </div>
                <hr className="d-none d-md-block" />

                <p className="h4 mb-4 firstheading ">
                  ENTER YOUR PERSONAL INFORMATION
                </p>
                <div className="row mb-4 ">
                  <div className="col-lg-5">
                    <div className="form-group">

                      <label >FIRST NAME</label>
                      <input type="text" className="form-control" name="firstname" value={this.state.firstname}
                        onChange={(e) => {
                          this.validate(e);
                          this.changeHandler(e)
                        }}
                        onBlur={(e) => this.validate(e)}
                      />
                      <p className="ms-1 text-danger namerr">{this.state.fnameErr}</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-group">

                      <label >M.I.</label>
                      <input type="text" className="form-control" name="middlename" value={this.state.middlename} onChange={(e) => this.changeHandler(e)} />

                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="form-group">

                      <label >LAST NAME</label>
                      <input type="text" className="form-control" name="lastname" value={this.state.lastname}
                        onChange={(e) => {
                          this.validate(e);
                          this.changeHandler(e)
                        }}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.lnameErr}</p>
                    </div>
                  </div>
                </div>

                <div className="form-group">

                  <label >NAME ON CARD</label>
                  <input type="text" className="form-control" name="cardname" value={this.state.cardname}
                    onChange={(e) => {
                      this.validate(e);
                      this.changeHandler(e)
                    }}
                    onBlur={(e) => this.validate(e)} />
                  <p className="ms-1 text-danger namerr">{this.state.cardnameErr}</p>
                </div>

                <div className="businessaddress1 mb-4">
                  <input type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.checkHandler} />
                  <label
                  >My home address is same as business address</label>

                </div>

                <div className="form-group mb-4 ">

                  <label >HOME ADDRESS LINE 1</label>
                  <input type="text" className="form-control" name="homeaddress1" value={this.state.homeaddress1}
                    onChange={(e) => {
                      this.validate(e);
                      this.changeHandler(e)
                    }}
                    onBlur={(e) => this.validate(e)} />
                  <p className="ms-1 text-danger namerr">{this.state.haErr}</p>
                </div>

                <div className="row mb-4 h_add_zip">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label >HOME ADDRESS LINE 2</label>
                      <input type="text" className="form-control" name="homeaddress2" value={this.state.homeaddress2} onChange={(e) => this.changeHandler(e)} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label >ZIP CODE.</label>
                      <input type="text" className="form-control" name="zipcode2" value={this.state.zipcode2}
                        onChange={(e) => {
                          this.validate(e);
                          this.changeHandler(e)
                        }}
                        onBlur={(e) => this.validate(e)} />
                      <p className="ms-1 text-danger namerr">{this.state.zip2Err}</p>
                    </div>
                  </div>
                </div>

                <hr />


                <p className="h4 firstheading">TELL US WHERE TO SEND YOUR BILL</p>
                <div className="form-group mb-4 ">
                  <div >
                    <input
                      type="radio"
                      name=" Bill" value={"Business"} onClick={(e) => this.radioHandler(e)}

                    />
                    <label > Business </label>
                  </div>
                  <div >
                    <input type="radio" name=" Bill" value={"Home"} onClick={(e) => this.radioHandler(e)} />
                    <label > Home </label>
                  </div>
                </div>
                <p>Required Information</p>

                <div >

                  <button className="btn btn-primary btn-block d-block mb-lg-4 mb-md-4 mx-auto px-lg-4 px-md-4 buttons " type="submit" >
                    Submit
                  </button>
                  <p className="ms-1 text-danger text-center ">{this.state.submiterror}</p>

                </div>

                <p className="h4 text-center ">TERMS AND CONDITIONS</p>
                <hr />
                <p className="text-center ">
                  PLEASE SCROLL DOWN TO READ IMPORTANT INFORMATION ABOUT RATES, FEES
                  AND OTHER COST INFORMATION BEFORE SUBMITTING YOUR APPLICATION
                </p>
                <p className="ins p-2 mb-4">
                  By submitting this application, I certify that I have read, met and
                  Aggreed to all of the terms, conditions and disclosures as outlined
                  below, which contain fee and other important cost information. I
                  certify that I am an Authoring Officer of the Company and have
                  provided current information. I understand that additional in
                  formation may be  to complete my application.
                </p>

              </form>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
export default Frontpage