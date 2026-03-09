import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4'>
      <main className='max-w-5xl w-full'>
        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 text-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='p-3 bg-white/20 rounded-xl backdrop-blur-sm'>
                <svg
                  className='w-12 h-12'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold'>
                  Professional Cloud Database Engineer
                </h1>
                <p className='text-blue-100 text-lg mt-1'>Practice Exam</p>
              </div>
            </div>
          </div>

          <div className='p-8 md:p-12'>
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Welcome to Your Exam Preparation Platform
              </h2>
              <p className='text-gray-600 text-lg leading-relaxed'>
                Test your knowledge and prepare for the Google Cloud
                Professional Database Engineer certification exam. This
                comprehensive practice test includes real exam-style questions
                with instant results and detailed feedback.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-blue-50 rounded-xl p-6 border border-blue-100'>
                <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                    />
                  </svg>
                </div>
                <h3 className='font-bold text-gray-900 mb-2'>40 Questions</h3>
                <p className='text-gray-600 text-sm'>
                  Comprehensive coverage of all exam topics
                </p>
              </div>

              <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100'>
                <div className='w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='font-bold text-gray-900 mb-2'>1 Hour</h3>
                <p className='text-gray-600 text-sm'>
                  Timed exam simulation with countdown timer
                </p>
              </div>

              <div className='bg-purple-50 rounded-xl p-6 border border-purple-100'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='font-bold text-gray-900 mb-2'>
                  Instant Results
                </h3>
                <p className='text-gray-600 text-sm'>
                  Get immediate feedback on your performance
                </p>
              </div>
            </div>

            <div className='bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8'>
              <h3 className='font-bold text-gray-900 mb-3 flex items-center gap-2'>
                <svg
                  className='w-5 h-5 text-blue-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  />
                </svg>
                Exam Features
              </h3>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start gap-2'>
                  <svg
                    className='w-5 h-5 text-green-600 mt-0.5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Real-time countdown timer with visual alerts</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg
                    className='w-5 h-5 text-green-600 mt-0.5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Question navigator with status indicators</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg
                    className='w-5 h-5 text-green-600 mt-0.5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Mark questions for review and return later</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg
                    className='w-5 h-5 text-green-600 mt-0.5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Detailed score breakdown and performance analysis</span>
                </li>
                <li className='flex items-start gap-2'>
                  <svg
                    className='w-5 h-5 text-green-600 mt-0.5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Community voting insights for each question</span>
                </li>
              </ul>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href='/exam'
                className='flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center'
              >
                Start Practice Exam
              </Link>
              <button className='flex-1 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-200 text-center'>
                View Study Guide
              </button>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center text-gray-600'>
          <p className='text-sm'>
            Practice makes perfect. Good luck with your certification journey!
          </p>
        </div>
      </main>
    </div>
  );
}
