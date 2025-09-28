import React, { useState } from "react";
import { CardContainer, CardBody, CardItem } from "./3DCardEffect";
import CertificateModal from "./CertificateModal";

const Certificate = ({ title, issuer, date, image, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CardContainer containerClassName="w-full">
        <CardBody className="h-[22rem] w-[20rem] bg-gradient-to-br from-midnight to-navy border border-white/10 rounded-2xl shadow-lg p-5">
          <CardItem
            as="button"
            translateZ={40}
            className="w-full"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-40 rounded-lg shadow-md"
            />
          </CardItem>

          <CardItem translateZ={60} className="mt-4 text-lg font-bold text-white">
            {title}
          </CardItem>

          <CardItem translateZ={30} className="mt-2 text-sm text-neutral-400">
            {issuer} • {date}
          </CardItem>

          <CardItem translateZ={50} className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-4 py-2 text-sm font-medium transition rounded-lg bg-royal text-white hover:bg-lavender cursor-pointer"
            >
              View Certificate
            </button>
          </CardItem>
        </CardBody>
      </CardContainer>

      {isModalOpen && (
        <CertificateModal
          image={image}
          title={title}
          issuer={issuer}
          date={date}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Certificate;
