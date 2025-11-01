import React, { useState } from "react";
import "../styles/RequiredInfoPage3.css";

import ClipboardIcon from '../assets/clipboard-new-24x24.svg';
import DropdownIcon from './svg_comp/DropdownIcon';
import ClockIcon from './svg_comp/ClockIcon';
import CalendarIcon from './svg_comp/CalendarIcon';
import LocationIcon from './svg_comp/LocationIcon';
import SubmitButtonIcon from './svg_comp/SubmitButtonIcon';
import RadioButtonCheckedBlack from './svg_comp/RadioButtonCheckedBlack';
import RadioUnchecked from './svg_comp/RadioUnchecked';
import FileIcon from './svg_comp/FileIcon';
import PurpleIcon from './svg_comp/PurpleIcon';

const RequiredInfoPage3 = ({ onClick, className = "" }) => {
  const [cabType, setCabType] = useState('teamLunch');

  return (
    <div className={`required-info-rectangle-page3 ${className}`}> 
      <div className="required-info-header-page3">
        <span className="required-info-title-page3">
          <img className="clipboard-icon-page3" src={ClipboardIcon} width={24} height={24} alt="clipboard" />
          <span> &nbsp;&nbsp;Content Information</span>
        </span>
      </div>
      <div className="worklet-details-card-page3">
        <div className="form-sections-container-page3">
          {/* Cab Type Section */}
          <div className="form-section-page3">
            <label className="cab-type-label-page3">Cab Type</label>
            <div className="radio-group-page3">
              <label className={`radio-label-page3 ${cabType === 'teamOuting' ? 'checked' : 'unchecked'}`}>
                <div className="radio-container-page3">
                  {cabType === 'teamOuting' ? (
                    <RadioButtonCheckedBlack className="radio-checked-icon-page3" width={20} height={21} />
                  ) : (
                    <RadioUnchecked className="radio-unchecked-icon-page3" width={20} height={21} />
                  )}
                </div>
                <input
                  type="radio"
                  name="cabType"
                  value="teamOuting"
                  checked={cabType === 'teamOuting'}
                  onChange={(e) => setCabType(e.target.value)}
                  className="radio-input-page3"
                />
                Team Outing
              </label>
              <label className={`radio-label-page3 ${cabType === 'teamLunch' ? 'checked' : 'unchecked'}`}>
                <div className="radio-container-page3">
                  {cabType === 'teamLunch' ? (
                    <RadioButtonCheckedBlack className="radio-checked-icon-page3" width={20} height={21} />
                  ) : (
                    <RadioUnchecked className="radio-unchecked-icon-page3" width={20} height={21} />
                  )}
                </div>
                <input
                  type="radio"
                  name="cabType"
                  value="teamLunch"
                  checked={cabType === 'teamLunch'}
                  onChange={(e) => setCabType(e.target.value)}
                  className="radio-input-page3"
                />
                Team Lunch
              </label>
            </div>
          </div>

          {/* Location Details Section */}
          <div className="form-section-page3">
            <h3 className="section-heading-page3">Location Details</h3>
            <div className="form-grid-3-page3">
              <div className="form-field-page3">
                <label className="form-field-label-page3">Reporting Building</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page3">
                    <option>Orion</option>
                  </select>
                  <DropdownIcon className="dropdown-icon-page3" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Restaurant Address</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="xxx-xxx-xxx-xxx-xx"
                    className="form-text-input-page3"
                    style={{ paddingLeft: '14px', paddingRight: '44px' }}
                  />
                </div>
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Required Date</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="date"
                    defaultValue="2025-10-15"
                    className="form-date-input-page3"
                    placeholder="DD-MMM-YYYY"
                    style={{
                      paddingRight: '50px'
                    }}
                  />
                  <CalendarIcon className="calendar-icon-page3" width={16} height={17} />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details Section */}
          <div className="form-section-page3">
            <h3 className="section-heading-page3">Booking Details</h3>
            <div className="form-grid-3-page3">
              <div className="form-field-page3">
                <label className="form-field-label-page3">Number of Peoples (Minimum 10)</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page3">
                    <option>20</option>
                  </select>
                </div>
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Start Time from Office</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    defaultValue="12:00 PM"
                    className="form-text-input-page3"
                    placeholder="12:00 PM"
                    pattern="^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$"
                    style={{
                      paddingRight: '80px'
                    }}
                  />
                  <ClockIcon className="clock-icon-page3" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">End Time at Office</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    defaultValue="12:00 PM"
                    className="form-text-input-page3"
                    placeholder="12:00 PM"
                    pattern="^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$"
                    style={{
                      paddingRight: '80px'
                    }}
                  />
                  <ClockIcon className="clock-icon-page3" width={16} height={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-section-page3">
            <h3 className="section-heading-page3">Personal Details</h3>
            <div className="form-grid-2-page3">
              <div className="form-field-page3">
                <label className="form-field-label-page3">
                  Extension No <span className="required-asterisk-page3">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="2-03-719"
                  className="form-text-input-page3"
                />
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">
                  Mobile No <span className="required-asterisk-page3">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="+91 7550142047"
                  className="form-text-input-page3"
                />
              </div>
            </div>
          </div>

          {/* Admin / Trip Details Section */}
          <div className="form-section-page3">
            <h3 className="section-heading-page3">Admin / Trip Details</h3>
            <div className="form-grid-3-page3">
              <div className="form-field-page3">
                <label className="form-field-label-page3">Number of Buses Allocated</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page3">
                    <option>2</option>
                  </select>
                  <DropdownIcon className="dropdown-icon-page3" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Vehicle Type</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input-page3">
                    <option>Tempo Traveller</option>
                  </select>
                  <DropdownIcon className="dropdown-icon-page3" width={16} height={16} />
                </div>
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Vehicle Number</label>
                <input 
                  type="text" 
                  placeholder="12:00 PM"
                  className="form-text-input-page3"
                />
              </div>
            </div>
            <div className="form-grid-3-page3" style={{ marginTop: '16px' }}>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Driver Name</label>
                <input 
                  type="text" 
                  placeholder="Shankar"
                  className="form-text-input-page3"
                />
              </div>
              <div className="form-field-page3">
                <label className="form-field-label-page3">Driver Number</label>
                <input 
                  type="text" 
                  placeholder="7552114225"
                  className="form-text-input-page3"
                />
              </div>
              <div className="form-field-page3" style={{ display: 'flex', alignItems: 'flex-end' }}>
                {/* Add button removed - keeping div for alignment */}
              </div>
            </div>
          </div>

          {/* Vehicle List Section */}
          <div className="form-section-page3">
            <div className="vehicle-list-table-page3">
              <table className="vehicle-table-page3">
                <thead>
                  <tr className="table-title-row-page3">
                    <th colSpan="5" className="table-title-page3">Vehicle List</th>
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
                    <td>1</td>
                    <td>30012541</td>
                    <td>Shankar</td>
                    <td>7550142047</td>
                  </tr>
                  <tr>
                    <td>Tempo Traveller</td>
                    <td>1</td>
                    <td>600146741</td>
                    <td>Sajid Mehta</td>
                    <td>7550142047</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-container-page3">
            <div className="view-policies-link-page3">
              <FileIcon className="view-policies-icon-page3" width={20} height={20} />
              <span>View Policies</span>
            </div>
            <div className="submit-buttons-page3">
              {/* Submit/Reject buttons removed - keeping div for alignment */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredInfoPage3;
