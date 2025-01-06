'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Activity } from '@/types/activity';

interface BookingModalProps {
  activity: Activity;
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    participants: string;
    message: string;
  };
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function BookingModal({
  activity,
  isOpen,
  onClose,
  formData,
  setFormData,
  onSubmit
}: BookingModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-xl p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="font-sf-pro text-[24px] font-semibold text-[#1D1D1F] dark:text-white"
                    >
                      Book {activity.name}
                    </Dialog.Title>
                    <p className="mt-2 text-[15px] text-[#1D1D1F]/60 dark:text-white/60">
                      Fill out the form below to book this activity for your team
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-medium text-[#1D1D1F]/60 dark:text-white/60">
                      Starting from
                    </p>
                    <p className="text-[20px] font-semibold text-[#FF4D29]">
                      {activity.price}
                    </p>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="block w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="block w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="block w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="block w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="participants" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Number of Participants
                    </label>
                    <input
                      type="number"
                      id="participants"
                      value={formData.participants}
                      onChange={(e) => setFormData(prev => ({ ...prev, participants: e.target.value }))}
                      className="block w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-[#1D1D1F] dark:text-white mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="block w-full rounded-xl border-0 px-4 py-3 text-[15px] bg-white/60 dark:bg-white/5 shadow-sm ring-1 ring-inset ring-[#1D1D1F]/10 dark:ring-white/10 placeholder:text-[#1D1D1F]/40 dark:placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#FF4D29] transition-all duration-200"
                    />
                  </div>

                  <div className="mt-8 flex items-center justify-end gap-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex justify-center rounded-full px-6 py-3 text-[15px] font-medium text-[#1D1D1F] dark:text-white hover:bg-[#1D1D1F]/5 dark:hover:bg-white/10 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-full bg-[#FF4D29] px-8 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#FF4D29]/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 