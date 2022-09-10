import React, { useRef } from 'react'
import { RiBillFill } from 'react-icons/ri'
import { getCurrentDate, getCurrentHour } from '../../utils/date'
import Modal from '../Modal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function PaymentDetailsModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null)

  return (
    <Modal open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef}>
      <div className="relative inline-block w-full p-5 space-y-4 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-xs sm:my-8 sm:p-5 sm:align-middle md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12">
        <div className="pb-2 border-b">
          <div className="flex items-center gap-2 border-gray-100">
            <div className="p-2 bg-gray-100 rounded-full">
              <RiBillFill className="text-gray-400" />
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Details du paiement</p>
              <p className="text-xs text-gray-400">rerERykjfbHKVBHVG977</p>
            </div>
          </div>
          <PaymentDetailsHeader />
        </div>
        <div className="space-y-3">
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
            <p className="text-sm text-gray-500">Montant Payé</p>
            <p className="text-sm text-gray-700">779 000 GNF </p>
          </div>
          {/* seulement si le payment est de type commande */}
          {true && (
            <div className="px-2 space-y-1">
              <div className="flex items-center justify-between ">
                <p className="text-sm text-gray-500">Commande</p>
                <p className="text-sm text-gray-700">750 000 GNF</p>
              </div>
              <div className="flex items-center justify-between ">
                <p className="text-sm text-gray-500">Livraison</p>
                <p className="text-sm text-gray-700">20 000 GNF</p>
              </div>
              <div className="flex items-center justify-between ">
                <p className="text-sm text-gray-500">Frais de service</p>
                <p className="text-sm text-gray-700">9 000 GNF</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

function PaymentDetailsHeader() {
  return (
    <div className="py-5 space-y-4 ">
      <div className="flex items-end justify-between w-full">
        <div className="space-y-2">
          <div className="flex items-center justify-between space-x-4">
            <td className="text-sm text-gray-500 ">N˚ Commande</td>
            <p className="px-1 text-sm text-orange-500 bg-orange-100 rounded-full">
              MMSB3211
            </p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <td className="text-sm text-gray-500 ">Type</td>
            <p className="px-1 text-sm rounded-full bg-amber-100 text-amber-500">
              Livraison
            </p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <td className="text-sm text-gray-500 ">Nature</td>
            <span
              className={classNames(
                false
                  ? 'bg-green-100 text-green-500'
                  : 'bg-red-100 text-red-500',
                'inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-medium '
              )}
            >
              Sortie
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-end justify-between space-x-4">
            <td className="text-sm text-gray-500 ">Initiateur</td>
            <div className="flex items-center">
              <p className="text-sm">Ousmane Diallo</p>
              <p className="ml-auto text-xs text-gray-400">/dfjkvbdfjbv</p>
            </div>
          </div>
          <div className="flex items-end justify-between space-x-4">
            <td className="text-sm text-gray-500 ">Initiateur</td>
            <div className="flex items-center">
              <p className="text-sm">Ousmane Diallo</p>
              <p className="ml-auto text-xs text-gray-400">/dfjkvbdfjbv</p>
            </div>
          </div>
          <div className="flex items-end justify-between space-x-4">
            <td className="text-sm text-gray-500 ">Date</td>
            <p className="text-sm text-gray-700">
              {getCurrentDate()} - {getCurrentHour()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailsModal
