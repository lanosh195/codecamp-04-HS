import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import React, { useState } from "react";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  //   const [myAddressDetail, setMyAddressDetail] = useState("");
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    // console.log(data);

    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>주소 검색</Button>
      <div>내주소: {myAddress}</div>
      <div>내우편번호: {myZonecode}</div>
      {isOpen && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />;
        </Modal>
      )}
    </>
  );
}
