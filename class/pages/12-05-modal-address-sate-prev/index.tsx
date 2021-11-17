import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import React, { useState } from "react";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  //   const [myAddressDetail, setMyAddressDetail] = useState("");

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev)=>!prev);
  // };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // console.log(data);

    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>주소 검색</Button>
      <div>내주소: {myAddress}</div>
      <div>내우편번호: {myZonecode}</div>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />;
        </Modal>
      )}
    </>
  );
}
