/* eslint-disable react/button-has-type,react/destructuring-assignment,react/prop-types */
import React, { useRef, useState, forwardRef } from "react";
import { savePDF } from "@progress/kendo-react-pdf";
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
function ToPDF({ children, htmlToPrint }) {
  const currentRef = html =>
    savePDF(html, {
      paperSize: "auto",
      fileName: `${JSON.parse(localStorage.ccvState).contact.name}${JSON.parse(localStorage.ccvState).contact.surname}.pdf`,
      margin: 3
    });
  const createNewPdf = () => {
    currentRef(htmlToPrint.current);
  };
  return <>{children({ createNewPdf })}</>;
}

export function Test({children}) {
  const contentForNewPdf = useRef(null);
  return (
    <div>
    {children({ref:contentForNewPdf})}
      <ToPDF htmlToPrint={contentForNewPdf}>
        {({ createNewPdf }) => (
          <section className="pdf-toolbar">
          <Button color="primary" onClick={createNewPdf}>Create PDF</Button>
          </section>
        )}
      </ToPDF>
      
    </div>
  );
}