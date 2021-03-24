/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'

import { IconContext } from 'react-icons'
import { FaPlusCircle, FaMinusCircle, FaFileDownload } from 'react-icons/fa'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume = () => {
  // PDF scale controls
  const [pdfScale, setPdfScale] = useState(0.7)

  const handleScaleIncrease = () => {
    setPdfScale(pdfScale + 0.1)
  }
  const handleScaleDecrease = () => {
    setPdfScale(pdfScale - 0.1)
  }

  return (
    <>
      <div className="resume">
        <div className="resumeContainer">
          <Document
            file="assets/nikolay-butnik-full-stack-developer.pdf"
            renderMode="svg"
          >
            <Page pageNumber={1} scale={pdfScale} loading="Loading resume..." />
          </Document>
        </div>

        <div className="pdfControls">
          <IconContext.Provider
            value={{
              color: 'rgb(218, 218, 218)',
              size: '25px',
            }}
          >
            <div className="decreaseScale" onClick={handleScaleDecrease}>
              <FaMinusCircle />
            </div>
            <div className="scalePercentage">{`${Math.round(
              pdfScale * 100
            )}%`}</div>
            <div className="increaseScale" onClick={handleScaleIncrease}>
              <FaPlusCircle />
            </div>
            <a
              href="assets/nikolay-butnik-full-stack-developer.pdf"
              download
              className="downloadFile"
            >
              <FaFileDownload />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </>
  )
}

export default Resume
