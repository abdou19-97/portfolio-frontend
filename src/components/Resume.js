import "./ResumeStyle.css";
import React, { useEffect, useState } from "react";
import pdf from "../images/Abdou's_resume_2023.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row, Button, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume">
      <Container fluid className="resume-section">
        <Row className="resume-content">
          <Col md={8} className="resume-pdf">
            {numPages && (
              <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            )}
          </Col>
          <Col md={4} className="download-button">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
