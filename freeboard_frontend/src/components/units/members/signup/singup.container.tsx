import { useState } from "react";
import SignupUIPage from "./singup.presenter";
import SignUpUIPage from "./singup.presenter";

export default function SignupPage() {
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);
  const [information, setInformation] = useState("");
  function EmailCheck() {
    let MailCk = /\w+@\w+\.\w+/;
    if (!MailCk.test(Email)) {
      return;
    }
  }
  function PhoneNumberCheck() {
    let PhoneNumberCk = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!PhoneNumberCk.test(String(PhoneNumber))) return;
  }
  function IDCheck() {}
  function PasswordCheck() {}

  // function onChangeEmail(event) {
  //   setEmail(event?.target.value);
  // }
  // function onChangeMyPhoneNumber(event) {
  //   setPhoneNumber(event?.target.value);
  // }
  function onChangeInformation(event) {
    setInformation(event?.target.name);
  }
  return <SignupUIPage />;
}
