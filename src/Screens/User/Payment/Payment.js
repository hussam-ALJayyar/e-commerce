import React, { useState } from "react";
import { Typography } from "../../../App.Styles";
import {
  MainContainer,
  InnerContainer,
  Text,
  Line,
  MultiStepContainer,
} from "./Payment.Styles";
import PaymentComponent from "./PaymentComponent";
import PlaceOrderComponent from "./PlaceOrderComponent";
import { useLocation } from "react-router";
import Button from "../../../Components/Button/Button";

const BtnShippingStyles = {
  height: 40,
  cursor: "pointer",
};

const BtnOrderStyles = {
  ...BtnShippingStyles,
  opacity: 0.5,
  background: "#707070",
  color: "#ffffff",
};

function Payment(props) {
  const [BtnShipping, setBtnShipping] = useState({});
  const [BtnOrder, setBtnOrder] = useState();
  const location = useLocation();
  const isShippingPage = location.pathname.includes("shipping-address");

  return (
    <MainContainer>
      <Typography fontSize={25} fontWeight={700} color="#242424">
        Review Order
      </Typography>
      <MultiStepContainer>
        <InnerContainer>
          <Button
            isorange={"true"}
            text="1"
            width={"40px"}
            radius={"-1"}
            style={BtnShipping ? BtnShippingStyles : BtnOrderStyles}
          />
          <Text fontSize={22} fontWhite={700}>
            Shipping and Payment
          </Text>
          <Line style={{ margin: "20px 10px 0 40px" }} />
          <Button
            isorange={"true"}
            text="2"
            width={"40px"}
            radius={"-1"}
            style={BtnOrder ? BtnShippingStyles : BtnOrderStyles}
            onClick={() => {
              setBtnOrder(true);
            }}
          />
          <Text fontSize={22} fontWhite={700}>
            Place an Order
          </Text>
        </InnerContainer>
      </MultiStepContainer>

      {isShippingPage ? <PaymentComponent /> : <PlaceOrderComponent />}
    </MainContainer>
  );
}

export default Payment;
