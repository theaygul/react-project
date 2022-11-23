import React, { Component } from "react";
import Student from "./Student.js";

class App extends Component{
  render(){
    return(
      <div>
        <Student ad= 'Aygul' soyad='Gurbanova' kurs={3} group='web1' dersdedi />
        <Student  ad= 'Emil' soyad='Abdulxaliqov' kurs={3} group='web1'dersdedi/>
        <Student  ad= 'Nazrin' soyad='İmamverdiyeva' kurs={3} group='web1'dersdedi={false}/>
        <Student  ad= 'Shamo' soyad='Naghiyev' kurs={3} group='web1'dersdedi/>
        <Student  ad= 'Yagub' soyad='Rasulov' kurs={3} group='web1'dersdedi/>

      </div>
    )
  }
}
export default App