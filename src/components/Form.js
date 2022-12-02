import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Input from './Input'
import GeneratePdf from './GeneratePDF'

const products = [
  {
    id: 1,
    name: 'Paddle Unit',
    href: '#',
    price: '$15.73',
    color: 'Moss',
    size: '5L',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
]

const options = ['Inches', 'Feet', 'Millimeters', 'Centimeters']

export default function Form({
  measurement = 0,
  measurementType = options[3],
  minPaddles = 0,
  paddles = 0,
  perSection = 0,
  ref,
  updateInches,
  updateMeasurement,
  updateQuantity,
}) {
  products[0].size = `${measurement} ${measurementType}`

  let inches = measurement

  switch (measurementType) {
    case 'Millimeters':
      inches = (measurement / 25.4).toFixed(2)
      break
    case 'Centimeters':
      inches = (measurement / 2.54).toFixed(2)
      break
    case 'Feet':
      inches = (measurement / 12).toFixed(2)
      break

    default:
      break
  }

  const decimalFix = (number, point = 2) => number.toFixed(point)

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 hidden h-full w-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 px-4 pt-16 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-start space-x-4 py-6"
                >
                  <div className="flex-auto space-y-1">
                    <h3>{product.name}</h3>
                    <p className="text-gray-500">
                      {Math.floor(paddles || 0) + ' paddles'}
                    </p>
                    <p className="text-gray-500">{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              {measurementType === 'Millimeters' && (
                <>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Millimeters</dt>
                    <dd>{measurement}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Centimeters</dt>
                    <dd>{decimalFix(measurement / 10)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Feet</dt>
                    <dd>{decimalFix(measurement / 304.8)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Inches</dt>
                    <dd>{decimalFix(measurement / 25.4)}</dd>
                  </div>
                </>
              )}
              {measurementType === 'Centimeters' && (
                <>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Millimeters</dt>
                    <dd>{decimalFix(measurement * 10)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Centimeters</dt>
                    <dd>{measurement}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Feet</dt>
                    <dd>{decimalFix(measurement / 30.48)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Inches</dt>
                    <dd>{decimalFix(measurement / 2.54)}</dd>
                  </div>
                </>
              )}
              {measurementType === 'Feet' && (
                <>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Millimeters</dt>
                    <dd>{decimalFix(measurement * 304.8)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Centimeters</dt>
                    <dd>{decimalFix(measurement * 30.48)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Feet</dt>
                    <dd>{measurement}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Inches</dt>
                    <dd>{decimalFix(measurement * 12)}</dd>
                  </div>
                </>
              )}
              {measurementType === 'Inches' && (
                <>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Millimeters</dt>
                    <dd>{decimalFix(measurement * 25.4)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Centimeters</dt>
                    <dd>{decimalFix(measurement * 2.54)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Feet</dt>
                    <dd>{decimalFix(measurement / 12)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Inches</dt>
                    <dd>{measurement}</dd>
                  </div>
                </>
              )}
              <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Full Paddles</dt>
                  <dd>{Math.floor(measurement / perSection) || 0}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Extra Space</dt>
                  <dd>{measurement - minPaddles * perSection}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Extra Paddle (- is none)</dt>
                  <dd>0</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Extra Paddle (inches)</dt>
                  <dd>0</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Extra Paddle (cm)</dt>
                  <dd>0</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Post Kits</dt>
                  <dd>0</dd>
                </div>
              </dl>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$361.80</dd>
              </div>
            </dl>

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                <div className="mx-auto max-w-lg">
                  <Popover.Button className="flex w-full items-center py-6 font-medium">
                    <span className="mr-auto text-base">Total</span>
                    <span className="mr-2 text-base">$361.80</span>
                  </Popover.Button>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                      <dl className="mx-auto max-w-lg space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd>{measurement}</dd>
                        </div>
                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
          </div>
        </section>

        <form className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-medium text-gray-900"
              >
                Cat Fence Calculation
              </h2>

              <div className="mt-6">
                <Input
                  holder={'0.00'}
                  onChange={updateMeasurement}
                  options={options}
                  title={'Unit of Measurement'}
                />
              </div>

              <div className="mt-6">
                <Input
                  disabled={true}
                  holder={'0'}
                  onChange={updateQuantity}
                  title={'Number of paddles'}
                  type={'number'}
                  value={`${Math.round(measurement / perSection)}`}
                />
              </div>

              <div className="mt-6">
                <Input
                  holder={'0'}
                  onChange={updateInches}
                  title={`${measurementType} per section`}
                  type={'number'}
                  value={`${perSection}`}
                />
              </div>

              <div className="mt-6">
                <Input
                  disabled={true}
                  holder={'0'}
                  onChange={updateQuantity}
                  title={'Minimum number of paddles'}
                  type={'number'}
                  value={`${minPaddles}`}
                />
              </div>
            </section>
            <GeneratePdf html={ref} />
          </div>
        </form>
      </div>
    </div>
  )
}
