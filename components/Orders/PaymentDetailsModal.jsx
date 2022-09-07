import React, { useRef } from 'react'
import { RiBillFill } from 'react-icons/ri'
import { getCurrentDate, getCurrentHour } from '../../utils/date'
import Modal from '../Modal'

function PaymentDetailsModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null)

  return (
    <Modal open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef}>
      <div className="relative inline-block w-3/12 space-y-4 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-xs sm:my-8 sm:p-5 sm:align-middle">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <div className="p-2 bg-gray-100 rounded-full">
            <RiBillFill className="text-gray-400" />
          </div>
          <div className="">
            <p className="text-sm text-gray-500">Details du paiement</p>
            <p className="text-xs text-gray-400">rerERykjfbHKVBHVG977</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">Mode de paiement</p>
            <p className="px-2 py-1 text-xs uppercase rounded-full w-min whitespace-nowrap bg-sky-100 text-sky-500">
              Ecobank pay
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">Reference</p>
            <p className="text-sm text-gray-700">00TUNG444MGHM/NJTRTY</p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">Source</p>
            <p className="text-sm text-gray-700">ACC-342214507</p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">Montant</p>
            <p className="text-sm text-gray-700">GNF 779 000</p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-sm text-gray-700">
              {getCurrentDate()} - {getCurrentHour()}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PaymentDetailsModal
