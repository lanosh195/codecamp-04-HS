import {
  Address,
  AddressDetail,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  UploadButton,
  Error,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <Wrapper>
      <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeMyWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <Error>{props.myWriterError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" onChange={props.onChangeMyPassword} />
          <Error>{props.myPasswordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeMyTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <Error>{props.myTitleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeMyContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <img src={`https://storage.googleapis.com/${props.myImages[0]}`} />

        <Error>{props.myContentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode
            value={
              props.myZonecode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
          />

          <Button onClick={props.onToggleModal}>주소 검색</Button>
        </ZipcodeWrapper>
        <Address
          value={
            props.myAddress || props.data?.fetchBoard.boardAddress.address || ""
          }
        />

        <AddressDetail
          onChange={props.onChangeMyAadressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail || ""
          }
        ></AddressDetail>
        {props.isOpen && (
          <Modal
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
          >
            <DaumPostcode onComplete={props.handleComplete} />;
          </Modal>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeMyYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        {/* <img src={`https://storage.googleapis.com/${props.myImages[0]}`} /> */}
        <input
          style={{ display: "none" }}
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
        />
        <UploadButton onClick={props.onClickMyImage}>
          <>+</>
          <>Upload</>
        </UploadButton>
        <UploadButton>
          <>+</>
          <>Upload</>
        </UploadButton>
        <UploadButton>
          <>+</>
          <>Upload</>
        </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          disabled={props.isEdit ? false : !props.isActive}
          isActive={props.isEdit ? true : !props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

// {props.isEdit ? defaultValue={props.data?.fetchBoard.boardAddress.zipcode}
//   : props.myZonecode}

// {props.isEdit ? defaultValue={props.data?.fetchBoard.boardAddress.address}
//   : props. myAddress}
