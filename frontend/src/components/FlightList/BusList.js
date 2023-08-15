import React, { useState, useEffect } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './FlightList.css'
export default function BusList({ value: dataInp }) {

    const [obj, setObj] = useState('')
    const [reset, Setreset] = useState(false)
    const [arrowDown, setArrowDown] = useState(false)
    const [clas, SetClas] = useState(true)


    useEffect(() => {
        setObj(dataInp)
    }, [dataInp])


    const handleSubmit = bId => {
        localStorage.setItem("selectedBusId", bId)
        SetClas(false)
        setArrowDown(true)
    }


    const handleReset = (e) => {
        if (clas === false) {
            Setreset(true)
            SetClas(true)
            setArrowDown(false)
        }
        localStorage.removeItem("selectedBusId")
    }


const renderFunction = () => {
  return dataInp.map((bus, idx) => {
    return (
      <div key={idx} className="card mt-5 buslist">
        <div className="row ml-3">
          <div className="col-6 col-sm-3 mt-2 font-weight-bold">Brand</div>
          <div className="col-6 col-sm-3 mt-2 font-weight-bold">From</div>
          <div className="col-6 col-sm-3 mt-2 font-weight-bold">To</div>
          <div className="col-6 col-sm-3 mt-2 font-weight-bold">Price</div>

          <div className="w-100 d-none d-md-block"></div>

          {console.log(bus.seatArray)}
          <div className="col-6 col-sm-3 mb-4">{bus.companyName}</div>
          <div className="col-6 col-sm-3 mb-4">{bus.startCity}</div>
          <div className="col-6 col-sm-3 mb-4">{bus.destination}</div>
          <div className="col-6 col-sm-3 mb-4">{bus.pricePerSeat}</div>
          </div>
          <div className="row">
            <div className="row ml-3">
              <div className="col-6 col-sm-3 mt-2 font-weight-bold">Available SEATS</div>
              <div className="col-6 col-sm-3 mt-2 font-weight-bold ">TYPE</div>
              <div className="col-6 col-sm-3 mt-2 font-weight-bold ">NUMBER</div>
              <div className="col-3col-6 col-sm-3 mt-2 font-weight-bold">TIME</div>

              <div className="w-100 d-none d-md-block"></div>
           
              {console.log(bus.seatArray)}
              <div className="col-6 col-sm-3 mb-4">{bus.availableSeats}</div>
              <div className="col-6 col-sm-3 mb-4">{bus.busType}</div>
              <div className="col-6 col-sm-3 mb-4">{bus.busNumber}</div>
              <div className="col-6 col-sm-3 mb-4">{bus.Time}</div>

              <div className="col-6 col-sm-4 mb-2 ml-0"></div>
            </div>
            <button className={clas ? "btn btn-primary btn-md" : "btn btn-primary btn-md disabled"} onClick={() => { handleSubmit(bus.busNumber) }}>Book Now</button>
          </div>
          <div className="col-6 col-sm-4 mb-2 ml-0">
            <span className={reset ? "badge badge-danger ml-5" : "disabled"} onClick={e => handleReset(e)}>Reset</span>
          </div>
        </div>
    
    )
  })
}



    return (
        <div className="">
            {renderFunction()}
            <div className={arrowDown ? "activeArrow" : "nonActive"}>
                <FaAngleDoubleDown />
            </div>
        </div>

    )
}
