import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import {Icons} from "../../utils/Images";
import {SwitchWhite} from "../ui/Switches";
import Label from "../ui/Label";
import {ButtonMain} from "../ui/Buttons";
import Theme from "../../utils/Theme";
import {closeFeedback} from "../feedback/ShowFeedback";

const BackgroundStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.color.black1}F5;
  z-index: 1;
  
  .mobile & {
    align-content: start;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow-y: auto;
  }
`;

const FormStyle = styled.div`
  background-color: ${props => props.theme.color.white2};
  width: 690px;
  padding: 50px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  position: relative;
  
  .mobile & {
    grid-gap: 20px;
    width: calc(100% - 60px);
    height: 100%;
    padding: 60px 30px 0 30px;
    grid-template-columns: 1fr;
    
    & input, & textarea {
      width: 100%;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 20px;
  cursor: pointer;
`;

const HeaderStyle = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.color.black1};
  margin-bottom: 29px;
  
  mobile & {
    margin-bottom: 29px;
  }
`;

const AgreeStyle = styled.div`
  margin-top: 5px;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  cursor: pointer;
`;

const AgreeText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${props => props.theme.color.black1};
`;

const ImageStyle = styled.div`
  position: absolute;
  padding-right: 13px;
  right: 0;
  height: 100%;
  display: grid;
  align-content: center;
`;

type status = 'neutral'|'error'|'success';
const statusColor = {
    neutral: Theme.color.gray2,
    error: Theme.color.red1,
    success: Theme.color.green2,
};
const InputContainer = styled.div<{status?: status; focus?: boolean}>`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    height: 8px;
    width: 8px;
    background-color: ${props => props.status && !props.focus ? statusColor[props.status] : 'unset'};
    border-radius: 4px;
    top: 7px;
  }
`;

const Feedback = () => {
    const [error, setError] = useState(false);

    const [nameFocus, setNameFocus] = useState(false);
    const [name, setName] = useState('');
    const [nameStatus, setNameStatus] = useState<status|undefined>(undefined);

    const [phoneFocus, setPhoneFocus] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneStatus, setPhoneStatus] = useState<status|undefined>(undefined);

    const [emailFocus, setEmailFocus] = useState(false);
    const [email, setEmail] = useState('');
    const [emailStatus, setEmailStatus] = useState<status|undefined>(undefined);

    const [messageFocus, setMessageFocus] = useState(false);

    const [message, setMessage] = useState('');
    //const [messageStatus, setMessageStatus] = useState<status|undefined>(undefined);

    const [agree, setAgree] = useState(false);

    const checkPhone = (value: string) => setPhone(value.replace(/[^0-9\+\s]/g, ''));

    useEffect(() => {
        let error_ = false;
        if (name.length > 0) {
            setNameStatus('success');
        }
        else {
            error_ = true;
            setNameStatus('error');
        }

        if (phone.length > 0) {
            setPhoneStatus('success');
        }
        else {
            error_ = true;
            setPhoneStatus('error');
        }

        if (email.length > 0 && /^.+@.+\..+$/.test(email)) {
            setEmailStatus('success');
        }
        else {
            error_ = true;
            setEmailStatus('error');
        }

        setError(error_);
    }, [name, phone, email, message]);

    return (
        <BackgroundStyle>
            <FormStyle>
                <CloseButton onClick={closeFeedback}>
                    <img src={Icons.blackClose} />
                </CloseButton>
                <HeaderStyle>Напишите нам</HeaderStyle>
                <InputContainer status={nameStatus} focus={nameFocus}>
                    <Input value={name} error={nameStatus == 'error'}
                           onFocus={() => setNameFocus(true)} onBlur={() => setNameFocus(false)}
                           onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder={'Ваше имя'} />
                </InputContainer>
                <InputContainer status={phoneStatus} focus={phoneFocus}>
                    <Input value={phone} error={phoneStatus == 'error'}
                           onFocus={() => setPhoneFocus(true)} onBlur={() => setPhoneFocus(false)}
                           onChange={(e:ChangeEvent<HTMLInputElement>) => checkPhone(e.target.value)} placeholder={'Номер телефона'} />
                </InputContainer>
                <InputContainer status={emailStatus} focus={emailFocus}>
                    <Input value={email} error={emailStatus == 'error'}
                           onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}
                           onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder={'Email'} />
                </InputContainer>
                <InputContainer status={'neutral'} focus={messageFocus}>
                    <Textarea value={message}
                              onFocus={() => setMessageFocus(true)} onBlur={() => setMessageFocus(false)}
                              onChange={(e:ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} placeholder={'Сообщение'} />
                </InputContainer>
                <AgreeStyle onClick={() => setAgree(!agree)}>
                    <SwitchWhite value={agree} />
                    <AgreeText>
                        Согласен с обработкой данных
                    </AgreeText>
                </AgreeStyle>
                {
                    error && <Label style={{width: '100%'}}>Заполните недостающие поля</Label>
                }
                <ButtonMain style={{justifySelf: 'center', marginTop: '35px'}} disabled={error || !agree}>Отправить
                    <ImageStyle>
                        <img src={Icons.send} />
                    </ImageStyle>
                </ButtonMain>
            </FormStyle>
        </BackgroundStyle>
    );
};

export default Feedback;