'use client';

import { useState } from 'react';

const regions = [
  'North India',
  'South India',
  'East India',
  'West India',
  'Central India',
  'International'
];

const eventTypes = [
  'Virtual Team Building',
  'Outbound Adventure',
  'In-office Workshop',
  'Hybrid Experience'
];

const teamSizes = [
  '10-25 people',
  '26-50 people',
  '51-100 people',
  '101-250 people',
  '250+ people'
];

const industries = [
  'Technology',
  'Finance & Banking',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Education',
  'Consulting',
  'Others'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    designation: '',
    phone: '',
    region: '',
    teamSize: '',
    industry: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative bg-[#F5F5F7] dark:bg-black py-32" id="contact-form">
      <div className="relative mx-auto max-w-[1120px] px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="font-sf-pro text-[40px] font-semibold tracking-tight text-[#FF4D29] sm:text-[44px] lg:text-[48px] mb-4">
            Start Your Team's Journey
          </h2>
          <p className="mx-auto max-w-2xl text-[20px] leading-relaxed text-[#1D1D1F]/80 dark:text-white/80 font-sf-pro-text">
            Transform your team with our scientifically-backed activities. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="relative mx-auto max-w-[680px]">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="relative">
                    <label htmlFor="workEmail" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      id="workEmail"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      placeholder="Company Inc."
                    />
                  </div>

                  {/* Designation */}
                  <div className="relative">
                    <label htmlFor="designation" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      id="designation"
                      required
                      value={formData.designation}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      placeholder="Team Lead"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Region */}
                  <div className="relative">
                    <label htmlFor="region" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Region
                    </label>
                    <select
                      name="region"
                      id="region"
                      required
                      value={formData.region}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                    >
                      <option value="">Select Region</option>
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  {/* Team Size */}
                  <div className="relative">
                    <label htmlFor="teamSize" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      id="teamSize"
                      required
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                    >
                      <option value="">Select Team Size</option>
                      {teamSizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  {/* Industry */}
                  <div className="relative">
                    <label htmlFor="industry" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      id="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  {/* Event Type */}
                  <div className="relative">
                    <label htmlFor="eventType" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      id="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                    >
                      <option value="">Select Event Type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative mt-8">
                  <label htmlFor="message" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-[17px] text-[#1D1D1F] dark:text-white bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                    placeholder="Tell us about your team's goals and any specific requirements..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#FF4D29] px-12 py-4 text-[17px] font-semibold text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                Start Your Journey
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 