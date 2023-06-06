import OrderConfirmationSummery from "@/components/pages/orderConfirmation";
import React, { Component } from "react";

export default class OrderConfirmationComponent extends Component {
  render() {
    return <div className="w-full flex flex-col mt-8 items-center h-[100vh]">
      <OrderConfirmationSummery/>
    </div>;
  }
}
