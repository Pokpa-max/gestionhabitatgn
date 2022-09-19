import Image from 'next/image'
import React, { useRef } from 'react'
import { RiStarFill } from 'react-icons/ri'
import Modal from '../Modal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function FeedbackDetailsModal({ open, setOpen, feedback }) {
  const cancelButtonRef = useRef(null)
  return (
    <Modal open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef}>
      <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl sm:my-8 sm:w-full sm:max-w-xl sm:p-10 sm:align-middle">
        <div>
          <FeedbackDetailsContent feedback={feedback} />

          <div className="-my-10">
            <div className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <Image
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55r25_jgqOqljJTurHvNXvQ66NLaIbva_yA&usqp=CAU'
                  }
                  width={40}
                  height={40}
                  className="bg-gray-100 rounded-full "
                />
              </div>
              <div className={'flex-1 py-10'}>
                <h3 className="font-medium text-gray-900">Madifood</h3>

                <div class="mt-1">
                  <textarea
                    id="answer"
                    name="answer"
                    rows="3"
                    class="mt-1 block w-full border border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Repondez a ce commentaire"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent hover:bg-primary-700 bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Repondre
          </button>
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Fermer
          </button>
        </div>
      </div>
    </Modal>
  )
}

function FeedbackDetailsContent({ feedback }) {
  return (
    <div className="bg-white">
      <div>
        <h2 className="sr-only">Feedback utilisateur</h2>

        <div className="-my-10">
          <div className="flex space-x-4 text-sm text-gray-500">
            <div className="flex-none py-10">
              <Image
                src={feedback.user.avatarSrc}
                width={40}
                height={40}
                className="bg-gray-100 rounded-full "
              />
            </div>
            <div className={'flex-1 py-10'}>
              <h3 className="font-medium text-gray-900">
                {feedback.user.username}
              </h3>
              <p>
                <time dateTime={feedback.datetime}>{feedback.createdaT}</time>
              </p>

              <div className="flex items-center mt-4">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <RiStarFill
                    key={rating}
                    className={classNames(
                      feedback.rating > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{feedback.rating} sur 5 etoiles</p>

              <div
                className="mt-4 prose-sm prose text-gray-500 max-w-none"
                dangerouslySetInnerHTML={{ __html: feedback.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackDetailsModal
