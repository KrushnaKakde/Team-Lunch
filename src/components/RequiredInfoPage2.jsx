import React, { useState } from "react";
import "../styles/RequiredInfoPage2.css";

import ClipboardIcon from '../assets/clipboard-new-24x24.svg';
import DropdownIcon from './svg_comp/DropdownIcon';
import ClockIcon from './svg_comp/ClockIcon';
import CalendarIcon from './svg_comp/CalendarIcon';
import LocationIcon from './svg_comp/LocationIcon';
import SubmitButtonIcon from './svg_comp/SubmitButtonIcon';
import RadioUnchecked from './svg_comp/RadioUnchecked';
import FileIcon from './svg_comp/FileIcon';
import PurpleIcon from './svg_comp/PurpleIcon';
import RadioButtonCheckedBlack from './svg_comp/RadioButtonCheckedBlack';
import TransferIcon from './svg_comp/TransferIcon';
import TransportArrowIcon from './svg_comp/TransportArrowIcon';
import RejectIcon from './svg_comp/RejectIcon';

const RequiredInfoPage2 = ({ onClick, className = "" }) => {
  const [cabType, setCabType] = useState('teamLunch');

  return (
    <div className={`required-info-rectangle-page2 ${className}`}> 
      <div className="required-info-header-page2">
        <span className="required-info-title-page2">
          <img className="clipboard-icon-page2" src={ClipboardIcon} width={24} height={24} alt="clipboard" />
          <span> &nbsp;&nbsp;Content Information</span>
        </span>
      </div>
      <div className="worklet-details-card-page2">
        <div className="form-sections-container-page2">
          {/* Cab Type Section */}
          <div className="form-section-page2">
            <label className="cab-type-label-page2">Cab Type</label>
            <div className="radio-group-page2">
              <label className={`radio-label-page2 ${cabType === 'teamOuting' ? 'checked' : 'unchecked'}`}>
                <div className="radio-container-page2">
                  {cabType === 'teamOuting' ? (
                    <RadioButtonCheckedBlack className="radio-checked-icon-page2" width={20} height={21} />
                  ) : (
                    <RadioUnchecked className="radio-unchecked-icon-page2" width={20} height={21} />
                  )}
                </div>
                <input
                  type="radio"
                  name="cabType"
                  value="teamOuting"
                  checked={cabType === 'teamOuting'}
                  onChange={(e) => setCabType(e.target.value)}
                  className="radio-input-page2"
                />
                Team Outing
              </label>
              <label className={`radio-label-page2 ${cabType === 'teamLunch' ? 'checked' : 'unchecked'}`}>
                <div className="radio-container-page2">
                  {cabType === 'teamLunch' ? (
                    <RadioButtonCheckedBlack className="radio-checked-icon-page2" width={20} height={21} />
                  ) : (
                    <RadioUnchecked className="radio-unchecked-icon-page2" width={20} height={21} />
                  )}
                </div>
                <input
                  type="radio"
                  name="cabType"
                  value="teamLunch"
                  checked={cabType === 'teamLunch'}
                  onChange={(e) => setCabType(e.target.value)}
                  className="radio-input-page2"
                />
                Team Lunch
              </label>
            </div>
          </div>

          {/* Location Details Section */}
          <div className="form-section-page2">
            <h3 className="section-heading-page2">Location Details</h3>
            <div className="form-grid-3-page2">
              <div className="form-field-page2">
                <label className="form-field-label-page2">Reporting Building</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page2 reporting-building-select-page2">
                    <option>Orion</option>
                  </select>
                  <DropdownIcon className="dropdown-icon-page2" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Restaurant Address</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="xxx-xxx-xxx-xxx-xx"
                    className="form-text-input-page2 restaurant-address-input-page2"
                    style={{ paddingLeft: '14px', paddingRight: '44px' }}
                  />
                </div>
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Required Date</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="date"
                    defaultValue="2025-10-15"
                    className="form-date-input-page2 required-date-input-page2"
                    placeholder="DD-MMM-YYYY"
                    style={{
                      paddingRight: '50px'
                    }}
                  />
                  <CalendarIcon className="calendar-icon-page2" width={16} height={17} />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details Section */}
          <div className="form-section-page2">
            <h3 className="section-heading-page2">Booking Details</h3>
            <div className="form-grid-3-page2">
              <div className="form-field-page2">
                <label className="form-field-label-page2">Number of Peoples (Minimum 10)</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page2 number-of-peoples-select-page2">
                    <option>20</option>
                  </select>
                </div>
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Start Time from Office</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    defaultValue="12:00 PM"
                    className="form-text-input-page2 start-time-input-page2"
                    placeholder="12:00 PM"
                    pattern="^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$"
                    style={{
                      paddingRight: '80px'
                    }}
                  />
                  <ClockIcon className="clock-icon-page2" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">End Time at Office</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    defaultValue="12:00 PM"
                    className="form-text-input-page2 end-time-input-page2"
                    placeholder="12:00 PM"
                    pattern="^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$"
                    style={{
                      paddingRight: '80px'
                    }}
                  />
                  <ClockIcon className="clock-icon-page2" width={16} height={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-section-page2">
            <h3 className="section-heading-page2">Personal Details</h3>
            <div className="form-grid-2-page2">
              <div className="form-field-page2">
                <label className="form-field-label-page2">
                  Extension No <span className="required-asterisk-page2">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="2-03-719"
                  className="form-text-input-page2 extension-no-input-page2"
                />
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">
                  Mobile No <span className="required-asterisk-page2">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="+91 7550142047"
                  className="form-text-input-page2 mobile-no-input-page2"
                />
              </div>
            </div>
          </div>

          {/* Admin / Trip Details Section */}
          <div className="form-section-page2">
            <h3 className="section-heading-page2">Admin / Trip Details</h3>
            <div className="form-grid-3-page2">
              <div className="form-field-page2">
                <label className="form-field-label-page2">Number of Buses Allocated</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page2 buses-allocated-select-page2">
                    <option>2</option>
                  </select>
                  <DropdownIcon className="dropdown-icon-page2" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Vehicle Type</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page2 vehicle-type-select-page2">
                    <option>Tempo Traveller</option>
                  </select>
                  <DropdownIcon className="dropdown-icon-page2" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Vehicle Number</label>
                <input 
                  type="text" 
                  placeholder="12:00 PM"
                  className="form-text-input-page2 vehicle-number-input-page2"
                />
              </div>
            </div>
            <div className="form-grid-3-page2" style={{ marginTop: '16px' }}>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Driver Name</label>
                <input 
                  type="text" 
                  placeholder="Shankar"
                  className="form-text-input-page2 driver-name-input-page2"
                />
              </div>
              <div className="form-field-page2">
                <label className="form-field-label-page2">Driver Number</label>
                <input 
                  type="text" 
                  placeholder="7552114225"
                  className="form-text-input-page2 driver-number-input-page2"
                />
              </div>
              <div className="form-field-page2" style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button className="add-button-page2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7.5" stroke="#38AEE0" />
                    <path d="M8 4V12M4 8H12" stroke="#38AEE0" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle List Section */}
          <div className="form-section-page2">
            <div className="vehicle-list-table-page2">
              <table className="vehicle-table-page2">
                <thead>
                  <tr className="table-title-row-page2">
                    <th colSpan="5" className="table-title-page2">Vehicle List</th>
                  </tr>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Number of Buses Allocated</th>
                    <th>Vehicle Number</th>
                    <th>Driver Name</th>
                    <th>Driver Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alliance</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</td>
                    <td>&nbsp;&nbsp;30012541</td>
                    <td>Shankar</td>
                    <td>7550142047</td>
                  </tr>
                  <tr>
                    <td>Tempo Traveller</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</td>
                    <td>&nbsp;&nbsp;600146741</td>
                    <td>Sajid Mehta</td>
                    <td>7550142047</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Transfer Workflow Button */}
          <div className="transfer-workflow-container-page2">
            <button className="transfer-workflow-button-page2">
              <TransferIcon width={20} height={20} />
              <span>Transfer Workflow</span>
              <TransportArrowIcon width={11} height={19} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-container-page2">
            <div className="view-policies-link-page2">
              <FileIcon className="view-policies-icon-page2" width={20} height={20} />
              <span>View Policies</span>
            </div>
            <div className="submit-buttons-page2">
              <RejectIcon width={90} height={38} />
              <button
                className="approve-button-page2"
                style={{
                  width: '90px',
                  height: '38px',
                  backgroundColor: '#38AEE0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '400',
                  fontFamily: 'Samsung InterFace, Arial, sans-serif',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredInfoPage2;
