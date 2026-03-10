'use client';

import { useState, useEffect, useCallback } from 'react';
import { examQuestions } from '../data/questions';

type Answer = {
  questionId: number;
  selectedAnswer: string;
};

export default function ExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(10800); // 3 hours in seconds
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);

  const saveAnswer = useCallback(() => {
    const currentQuestion = examQuestions[currentQuestionIndex];
    const answerValue = selectedOptions.sort().join('');

    const existingAnswerIndex = answers.findIndex(
      (a) => a.questionId === currentQuestion.id,
    );

    if (existingAnswerIndex >= 0) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = {
        questionId: currentQuestion.id,
        selectedAnswer: answerValue,
      };
      setAnswers(updatedAnswers);
    } else {
      setAnswers([
        ...answers,
        {
          questionId: currentQuestion.id,
          selectedAnswer: answerValue,
        },
      ]);
    }
  }, [currentQuestionIndex, selectedOptions, answers]);

  const handleFinishExam = useCallback(() => {
    saveAnswer();
    setExamFinished(true);
  }, [saveAnswer]);

  useEffect(() => {
    if (examStarted && !examFinished && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [examStarted, examFinished, timeRemaining, handleFinishExam]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTimeRemaining(10800);
    setExamFinished(false);
    setSelectedOptions([]);
    setMarkedForReview([]);
  };

  const handleOptionSelect = (option: string) => {
    const currentQuestion = examQuestions[currentQuestionIndex];

    if (currentQuestion.correctAnswer.length > 1) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
    }
  };

  const handleNext = () => {
    saveAnswer();
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      loadAnswerForQuestion(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    saveAnswer();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      loadAnswerForQuestion(currentQuestionIndex - 1);
    }
  };

  const loadAnswerForQuestion = (index: number) => {
    const question = examQuestions[index];
    const existingAnswer = answers.find((a) => a.questionId === question.id);

    if (existingAnswer) {
      setSelectedOptions(existingAnswer.selectedAnswer.split(''));
    } else {
      setSelectedOptions([]);
    }
  };

  const handleQuestionNavigation = (index: number) => {
    saveAnswer();
    setCurrentQuestionIndex(index);
    loadAnswerForQuestion(index);
  };

  const toggleMarkForReview = () => {
    const questionId = examQuestions[currentQuestionIndex].id;
    if (markedForReview.includes(questionId)) {
      setMarkedForReview(markedForReview.filter((id) => id !== questionId));
    } else {
      setMarkedForReview([...markedForReview, questionId]);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    examQuestions.forEach((question) => {
      const answer = answers.find((a) => a.questionId === question.id);

      if (!answer || answer.selectedAnswer === '') {
        unanswered++;
      } else if (answer.selectedAnswer === question.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    return { correct, incorrect, unanswered, total: examQuestions.length };
  };

  const getQuestionStatus = (index: number) => {
    const question = examQuestions[index];
    const answer = answers.find((a) => a.questionId === question.id);
    const isMarked = markedForReview.includes(question.id);

    if (isMarked) return 'marked';
    if (answer && answer.selectedAnswer !== '') return 'answered';
    return 'unanswered';
  };

  if (!examStarted) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4'>
        <div className='max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12'>
          <div className='text-center'>
            <div className='inline-block p-4 bg-blue-100 rounded-full mb-6'>
              <svg
                className='w-16 h-16 text-blue-600'
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
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              GCP Database Engineer
            </h1>
            <h2 className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8'>
              Professional Certification Exam
            </h2>

            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8'>
              <div className='grid md:grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>
                    {examQuestions.length}
                  </div>
                  <div className='text-gray-600 font-medium'>Questions</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-indigo-600 mb-2'>
                    3:00:00
                  </div>
                  <div className='text-gray-600 font-medium'>Duration</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-purple-600 mb-2'>
                    70%
                  </div>
                  <div className='text-gray-600 font-medium'>Pass Marks</div>
                </div>
              </div>
            </div>

            <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-left'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-5 w-5 text-yellow-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='ml-3'>
                  <h3 className='text-sm font-medium text-yellow-800'>
                    Important Instructions
                  </h3>
                  <div className='mt-2 text-sm text-yellow-700'>
                    <ul className='list-disc list-inside space-y-1'>
                      <li>You have 3 hours to complete the exam</li>
                      <li>Some questions may have multiple correct answers</li>
                      <li>
                        You can mark questions for review and return to them
                        later
                      </li>
                      <li>The timer will start immediately when you begin</li>
                      <li>Results will be shown instantly after submission</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleStartExam}
              className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'
            >
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (examFinished) {
    const results = calculateResults();
    const percentage = ((results.correct / results.total) * 100).toFixed(1);
    const passed = parseFloat(percentage) >= 70;

    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4'>
        <div className='max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12'>
          <div className='text-center'>
            <div
              className={`inline-block p-4 rounded-full mb-6 ${passed ? 'bg-green-100' : 'bg-red-100'}`}
            >
              {passed ? (
                <svg
                  className='w-16 h-16 text-green-600'
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
              ) : (
                <svg
                  className='w-16 h-16 text-red-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              )}
            </div>

            <h1 className='text-4xl font-bold text-gray-900 mb-2'>
              Exam Completed!
            </h1>
            <p
              className={`text-2xl font-semibold mb-8 ${passed ? 'text-green-600' : 'text-red-600'}`}
            >
              {passed
                ? 'Congratulations! You Passed!'
                : 'Unfortunately, You Did Not Pass'}
            </p>

            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8'>
              <div className='text-6xl font-bold text-blue-600 mb-2'>
                {percentage}%
              </div>
              <div className='text-gray-600 font-medium mb-6'>Your Score</div>

              <div className='grid md:grid-cols-4 gap-4 mt-6'>
                <div className='bg-white rounded-lg p-4 shadow'>
                  <div className='text-2xl font-bold text-gray-900'>
                    {results.total}
                  </div>
                  <div className='text-sm text-gray-600'>Total Questions</div>
                </div>
                <div className='bg-white rounded-lg p-4 shadow'>
                  <div className='text-2xl font-bold text-green-600'>
                    {results.correct}
                  </div>
                  <div className='text-sm text-gray-600'>Correct</div>
                </div>
                <div className='bg-white rounded-lg p-4 shadow'>
                  <div className='text-2xl font-bold text-red-600'>
                    {results.incorrect}
                  </div>
                  <div className='text-sm text-gray-600'>Incorrect</div>
                </div>
                <div className='bg-white rounded-lg p-4 shadow'>
                  <div className='text-2xl font-bold text-gray-600'>
                    {results.unanswered}
                  </div>
                  <div className='text-sm text-gray-600'>Unanswered</div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <button
                onClick={() => {
                  setExamStarted(false);
                  setExamFinished(false);
                  setCurrentQuestionIndex(0);
                  setAnswers([]);
                  setSelectedOptions([]);
                  setMarkedForReview([]);
                }}
                className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg'
              >
                Retake Exam
              </button>

              <button
                onClick={() => {
                  setExamFinished(false);
                  setCurrentQuestionIndex(0);
                  loadAnswerForQuestion(0);
                }}
                className='w-full bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-200'
              >
                Review Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = examQuestions[currentQuestionIndex];
  const isMultipleChoice = currentQuestion.correctAnswer.length > 1;

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-md sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-xl font-bold text-gray-900'>
                GCP Database Engineer Exam
              </h1>
              <p className='text-sm text-gray-600'>
                Question {currentQuestionIndex + 1} of {examQuestions.length}
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <div
                className={`text-2xl font-bold ${timeRemaining < 600 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`}
              >
                {formatTime(timeRemaining)}
              </div>
              <button
                onClick={handleFinishExam}
                className='bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors'
              >
                Finish Exam
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className='mt-4'>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div
                className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                style={{
                  width: `${((currentQuestionIndex + 1) / examQuestions.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-6'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {/* Main Question Area */}
          <div className='lg:col-span-3'>
            <div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
              {isMultipleChoice && (
                <div className='bg-blue-50 border-l-4 border-blue-500 p-4 mb-6'>
                  <p className='text-blue-800 font-medium'>
                    <svg
                      className='inline w-5 h-5 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                        clipRule='evenodd'
                      />
                    </svg>
                    This question has multiple correct answers. Select all that
                    apply.
                  </p>
                </div>
              )}

              <div className='mb-6'>
                <h2 className='text-lg font-semibold text-gray-900 mb-4'>
                  {currentQuestion.question}
                </h2>
              </div>

              <div className='space-y-3'>
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleOptionSelect(option.label)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedOptions.includes(option.label)
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className='flex items-start'>
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-3 mt-0.5 flex items-center justify-center ${
                          selectedOptions.includes(option.label)
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedOptions.includes(option.label) && (
                          <svg
                            className='w-4 h-4 text-white'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        )}
                      </div>
                      <div className='flex-1'>
                        <span className='font-semibold text-gray-900'>
                          {option.label}.
                        </span>
                        <span className='ml-2 text-gray-700'>
                          {option.text}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className='flex items-center justify-between mt-8 pt-6 border-t'>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className='flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700 hover:bg-gray-300'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={toggleMarkForReview}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    markedForReview.includes(currentQuestion.id)
                      ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                      : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                  }`}
                >
                  {markedForReview.includes(currentQuestion.id)
                    ? '★ Marked'
                    : '☆ Mark for Review'}
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === examQuestions.length - 1}
                  className='flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 text-white hover:bg-blue-700'
                >
                  Next
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Question Navigator Sidebar */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-xl shadow-lg p-6 sticky top-24'>
              <h3 className='font-bold text-gray-900 mb-4'>
                Question Navigator
              </h3>

              <div className='flex gap-2 mb-4 text-xs'>
                <div className='flex items-center gap-1'>
                  <div className='w-3 h-3 bg-green-500 rounded'></div>
                  <span>Answered</span>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-3 h-3 bg-yellow-500 rounded'></div>
                  <span>Marked</span>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-3 h-3 bg-gray-200 rounded'></div>
                  <span>Not Answered</span>
                </div>
              </div>

              <div className='grid grid-cols-5 gap-2 max-h-96 overflow-y-auto'>
                {examQuestions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuestionNavigation(index)}
                      className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${
                        currentQuestionIndex === index
                          ? 'ring-2 ring-blue-600 ring-offset-2'
                          : ''
                      } ${
                        status === 'answered'
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : status === 'marked'
                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div className='mt-6 pt-6 border-t space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Answered:</span>
                  <span className='font-semibold text-green-600'>
                    {
                      examQuestions.filter(
                        (_, i) => getQuestionStatus(i) === 'answered',
                      ).length
                    }
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Marked:</span>
                  <span className='font-semibold text-yellow-600'>
                    {markedForReview.length}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Not Answered:</span>
                  <span className='font-semibold text-gray-600'>
                    {
                      examQuestions.filter(
                        (_, i) => getQuestionStatus(i) === 'unanswered',
                      ).length
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
