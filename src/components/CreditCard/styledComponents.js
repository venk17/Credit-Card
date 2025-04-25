import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CreditCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 40px;
  }
`

export const CreditCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0 8px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 40px;
  }

  @media screen and (min-width: 992px) {
    font-size: 36px;
    margin-top: 60px;
  }
`

export const HorizontalLine = styled.div`
  width: 118px;
  border: 2px solid #ffd773;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const CardContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin: 40px 0;
    align-items: center;
    flex-grow: 1;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 320px;
  height: 200px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0px 4px 16px rgba(52, 78, 122, 0.5);

  @media screen and (min-width: 768px) {
    height: 220px;
    max-width: 350px;
    border-radius: 20px;
  }

  @media screen and (min-width: 992px) {
    height: 250px;
    max-width: 400px;
    border-radius: 24px;
  }
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 992px) {
    font-size: 28px;
  }
`

export const CardholderNameText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 12px;
  margin: 15px 0 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const CardholderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 40px;
    align-items: center;
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0px 4px 16px rgba(52, 78, 122, 0.2);

  @media screen and (min-width: 768px) {
    padding: 30px;
    border-radius: 20px;
  }
`

export const PaymentMethodHeading = styled.h1`
  color: #475569;
  text-align: center;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 20px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`
