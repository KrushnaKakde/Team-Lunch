import React, { useState } from "react";
import "../styles/RequiredInfo.css";

import ClipboardIcon from '../assets/clipboard-new-24x24.svg';
import DropdownIcon from './svg_comp/DropdownIcon';
import ClockIcon from './svg_comp/ClockIcon';
import CalendarIcon from './svg_comp/CalendarIcon';
import LocationIcon from './svg_comp/LocationIcon';
import SubmitButtonIcon from './svg_comp/SubmitButtonIcon';
import RadioChecked from './svg_comp/RadioChecked';
import RadioUnchecked from './svg_comp/RadioUnchecked';
import FileIcon from './svg_comp/FileIcon';
import PurpleIcon from './svg_comp/PurpleIcon';
import CrossIcon from './svg_comp/CrossIcon';
import ModalArrow from './svg_comp/ModalArrow';

const RequiredInfo = ({ onClick, className = "" }) => {
  const [cabType, setCabType] = useState('teamLunch');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`required-info-rectangle ${className}`}> 
      <div className="required-info-header">
        <span className="required-info-title">
          <img className="clipboard-icon" src={ClipboardIcon} width={24} height={24} alt="clipboard" />
          <span> &nbsp;&nbsp;Content Information</span>
        </span>
      </div>
      <div className="worklet-details-card">
        <div className="form-sections-container">
          {/* Purple Icon at top left */}
          <div className="purple-icon-container" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
            <PurpleIcon className="purple-icon" width={20} height={18} />
          </div>

          {/* Cab Type Section */}
          <div className="form-section">
            <label className="cab-type-label">Cab Type</label>
            <div className="radio-group">
              <label className={`radio-label ${cabType === 'teamOuting' ? 'checked' : 'unchecked'}`}>
                <div className="radio-container">
                  {cabType === 'teamOuting' ? (
                    <RadioChecked className="radio-checked-icon" width={20} height={21} />
                  ) : (
                    <RadioUnchecked className="radio-unchecked-icon" width={20} height={21} />
                  )}
                </div>
                <input
                  type="radio"
                  name="cabType"
                  value="teamOuting"
                  checked={cabType === 'teamOuting'}
                  onChange={(e) => setCabType(e.target.value)}
                  className="radio-input"
                />
                Team Outing
              </label>
              <label className={`radio-label ${cabType === 'teamLunch' ? 'checked' : 'unchecked'}`}>
                <div className="radio-container">
                  {cabType === 'teamLunch' ? (
                    <RadioChecked className="radio-checked-icon" width={20} height={21} />
                  ) : (
                    <RadioUnchecked className="radio-unchecked-icon" width={20} height={21} />
                  )}
                </div>
                <input
                  type="radio"
                  name="cabType"
                  value="teamLunch"
                  checked={cabType === 'teamLunch'}
                  onChange={(e) => setCabType(e.target.value)}
                  className="radio-input"
                />
                Team Lunch
              </label>
            </div>
          </div>

          {/* Location Details Section */}
          <div className="form-section">
            <h3 className="section-heading">Location Details</h3>
            <div className="form-grid-3">
              <div className="form-field">
                <label className="form-field-label">Reporting Building</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input">
                    <option>Orion</option>
                  </select>
                  <DropdownIcon className="dropdown-icon" width={16} height={16} />
                </div>
              </div>
              <div className="form-field">
                <label className="form-field-label">Restaurant Address</label>
                <div style={{ position: 'relative' }}>
                  <LocationIcon className="location-icon" width={20} height={20} />
                  <input 
                    type="text" 
                    placeholder="xxx-xxx-xxx-xx"
                    className="form-text-input"
                    style={{ paddingLeft: '14px', paddingRight: '44px' }}
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-field-label">Required Date</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="date" 
                    defaultValue="2025-10-15"
                    className="form-date-input"
                  />
                  <CalendarIcon className="calendar-icon" width={16} height={17} />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details Section */}
          <div className="form-section">
            <h3 className="section-heading">Booking Details</h3>
            <div className="form-grid-3">
              <div className="form-field">
                <label className="form-field-label">Number of Peoples (Minimum 10)</label>
                <div style={{ position: 'relative' }}>
                  <select className="form-select-input">
                    <option>20</option>
                  </select>
                  <DropdownIcon className="dropdown-icon" width={16} height={16} />
                </div>
              </div>
              <div className="form-field">
                <label className="form-field-label">Start Time from Office</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="time" 
                    defaultValue="12:00"
                    className="form-time-input"
                  />
                  <ClockIcon className="clock-icon" width={16} height={16} />
                </div>
              </div>
              <div className="form-field">
                <label className="form-field-label">End Time at Office</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="time" 
                    defaultValue="12:00"
                    className="form-time-input"
                  />
                  <ClockIcon className="clock-icon" width={16} height={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="form-section-contact">
            <h3 className="section-heading">Contact Details</h3>
            <div className="form-grid-2">
              <div className="form-field">
                <label className="form-field-label">
                  Extension No <span className="required-asterisk">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="2-03-719"
                  className="form-text-input"
                />
              </div>
              <div className="form-field">
                <label className="form-field-label">
                  Mobile No <span className="required-asterisk">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="+91 7550142047"
                  className="form-text-input"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-button-container">
            <SubmitButtonIcon className="submit-button-icon" width={95} height={36} />
          </div>

          {/* View Policies Section */}
          <div className="view-policies-container">
            <FileIcon className="view-policies-icon" width={20} height={20} />
            <span className="view-policies-text">View Policies</span>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <ModalArrow className="modal-arrow" width={12} height={7} />
                <div className="modal-header">
                  <h2 className="modal-title">Note Before Booking:</h2>
                  <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                    <CrossIcon width={16} height={16} />
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-text">
                    <p>• 1) Details shall be shared via email/SMS 1 hour prior to booking time.</p>
                    <p>&nbsp;&nbsp;2) Employee who has raised the request shall also be the SPOC for any co-ordination.</p>
                    <p>&nbsp;&nbsp;3) Any parking charges to be borne by employee only.</p>
                    <p>&nbsp;&nbsp;4) In case of less than 10 members, kindly raise cab requests as required.</p>
                    <p>&nbsp;&nbsp;5) Do reach out to 9740639191 / 7406999191 for any support during commute.</p>
                    <p>&nbsp;&nbsp;6) Any food or Beverage shall not be permitted in the bus.</p>
                    <p>&nbsp;&nbsp;7) Employee can raise a request up to a working day prior to request, before 5 pm.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;