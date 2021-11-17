import { Modal, Button } from "antd";
import React, { useState } from "react";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>안녕하세요</p>
        <p>개린이입니다.</p>
        <p>살려주세요...</p>
        비밀번호 입력: <input type="password" />
      </Modal>
    </>
  );
}

//함수형 만들기
// const function ModalBasicPage= () =>{

//     return(
//         <>
//
//         </>
//     )
// }
// export default ModalBasicPage
