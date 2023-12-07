import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponents from "../../assets/components/NavbarComponents";
import arrow_down from "../../assets/img/icon/arrow-down.svg";
import arrow_up from "../../assets/img/icon/arrow-up.svg";
import mastercard from "../../assets/img/icon/mastercard logo.svg";
import visa from "../../assets/img/icon/visa logo.svg";
import amex from "../../assets/img/icon/amex logo.svg";
import paypal from "../../assets/img/icon/paypal logo.svg";

const DetailKelasPembayaran = () => {
  const [BankAccordionOpen, setBankAccordionOpen] = useState(false);
  const [CreditAccordionOpen, setCreditAccordionOpen] = useState(false);
  const navigate = useNavigate();

  const toogleBankAccordion = () => {
    setBankAccordionOpen((BankAccordionOpen) => !BankAccordionOpen);
  };

  const toogleCreditAccordion = () => {
    setCreditAccordionOpen((CreditAccordionOpen) => !CreditAccordionOpen);
  };

  return (
    <div className="parents">
      <div>
        <NavbarComponents />
      </div>

      <div className="header-section flex flex-col gap-[1.25rem] justify-center w-full bg-[#FFFF] shadow-lg items-center px-[5rem] py-[1.5rem]">
        <div className="back-arrow-section flex items-center gap-4 w-[100%] ml-[1rem]">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faArrowLeft}
            size="md"
            style={{ color: "black" }}
            onClick={() => {
              navigate("/detailKelas");
            }}
          />
          <span
            className="font-montserrat font-black text-[1rem] leading-[1.5rem] cursor-pointer"
            onClick={() => {
              navigate("/detailKelas");
            }}
          >
            Kembali
          </span>
        </div>
        <div className="deadline-button-container flex items-center justify-center bg-[#FF0000] rounded-[0.75rem] w-[60%] py-[0.8rem]">
          <span className="font-montserrat text-white text-[1rem] leading-[1.5rem] font-black">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </span>
        </div>
      </div>

      <div className="payment-section flex items-center justify-center gap-[2.25rem] py-[3rem]">
        <div className="left-payment-section flex flex-col gap-2 w-[40%] h-[15rem]">
          <div
            className="bank-transfer-container flex items-center justify-between bg-[#3C3C3C] rounded-[0.5rem] px-[1rem] py-[.75rem]"
            onClick={toogleBankAccordion}
          >
            <span className="font-montserrat font-semibold text-white text-[0.8rem] leading-[1.25rem]">
              Bank Transfer
            </span>
            <img src={BankAccordionOpen ? arrow_down : arrow_up} alt="arrow-accordion" width="" />
          </div>

          {
            BankAccordionOpen && (
              <div>Hello Bank</div>
            )
          }

          <div
            className="credit-card-container flex items-center justify-between bg-dark-blue rounded-[0.5rem] px-[1rem] py-[.75rem]"
            onClick={toogleCreditAccordion}
          >
            <span className="font-montserrat font-semibold text-white text-[0.8rem] leading-[1.25rem]">
              Credit Card
            </span>
            <img src={CreditAccordionOpen ? arrow_down : arrow_up} alt="arrow-accordion" width="" />
          </div>
                   {
            CreditAccordionOpen && (
              <div className='modal-credit-container flex flex-col justify-center items-center gap-[1rem] w-full py-[1.5rem] bg-[#FFFF] shadow-lg rounded-[1rem] -mt-2'>
                <div className='credit-card-img-container flex items-center justify-center gap-[0.75rem]'>
                  <img src={mastercard} alt='mastercard icon' width='35'/>
                  <img src={visa} alt='visa icon' width='35'/>
                  <img src={amex} alt='amex icon' width='35'/>
                  <img src={paypal} alt='paypal icon' width='35'/>
                </div>

                <div className="form-input-credit flex flex-col items-center gap-[1.5rem] w-[60%]">
                  <div className='card-number-container flex flex-col gap-2 w-[100%]'>
                    <span className='font-poppins font-semibold text-[0.9] leading-[1.25rem]'>Card Number</span>
                    <div className='card-number-input w-[100%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1'>
                    <input placeholder="4480 0000 0000 0000" className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]" type='number' required/>
                    </div>
                  </div>

                  <div className='card-holder-name-container flex flex-col gap-2 w-[100%]'>
                    <span className='font-poppins font-semibold text-[0.9] leading-[1.25rem]'>Card Holder Name</span>
                    <div className='card-holder-name-input w-[100%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1'>
                    <input placeholder="John Doe" className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]" type='name' required/>
                    </div>
                  </div>

                  <div className='card-cvv-expiry_data-container flex w-[100%] gap-2'>
                  <div className='card-cvv-container flex flex-col gap-2 w-[50%]'>
                    <span className='font-poppins font-semibold text-[0.9] leading-[1.25rem]'>CVV</span>
                    <div className='card-holder-name-input w-[95%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1'>
                    <input placeholder="000" className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]" type='number' required/>
                    </div>
                  </div>

                   <div className='card-expiry_date-container flex flex-col gap-2 w-[50%]'>
                    <span className='font-poppins font-semibold text-[0.9] leading-[1.25rem]'>Expiry Date</span>
                    <div className='card-holder-name-input w-[95%] border-b-2 border-[#D0D0D0] pb-[.2rem] px-1'>
                    <input placeholder="07/24" className="outline-none font-poppins text-[0.9rem] leading-[1.25rem]" type='number' required/>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>

        <div className="right-payment-section flex flex-col items-center border-2 h-[15rem] w-[20rem] rounded-[1.5rem] border-dark-blue"></div>
      </div>
    </div>
  );
};

export default DetailKelasPembayaran;
